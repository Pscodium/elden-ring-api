import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Ammos } from "../entity/Ammos";
import { Armors } from "../entity/Armors";
import { Items } from "../entity/Items";
import { Shields } from "../entity/Shields";
import { Talismans } from "../entity/Talismans";
import { Weapons } from "../entity/Weapons";


class InventoryController {

    private ammoRepository = AppDataSource.getRepository(Ammos);
    private armorRepository = AppDataSource.getRepository(Armors);
    public itemsRepository = AppDataSource.getRepository(Items);
    public shieldsRepository = AppDataSource.getRepository(Shields);
    public weaponsRepository = AppDataSource.getRepository(Weapons);
    public talismansRepository = AppDataSource.getRepository(Talismans);

    /**
     * @Ammos routes
     */
    getAmmos = async (req: Request, res: Response) => {
        const ammos = await this.ammoRepository.find();

        return res.json(ammos);
    };

    getAmmoById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const ammo = await this.ammoRepository.findOne({ where: { id: id }});

        if ( ammo === null ) {
            return res.status(404).json({ message: "This ammo id does not exist." });
        }

        return res.json(ammo);
    };

    deleteAmmoById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.ammoRepository.delete(id);

        return res.json({ message: "Ammo sucessfully deleted." });
    };

    updateAmmo = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const ammo = await this.ammoRepository.update(id, req.body);

        if (ammo.affected === 1) {
            const updatedAmmos = await this.ammoRepository.findOne({ where: { id: id }});
            return res.json(updatedAmmos);
        } else {
            return res.status(404).json({ message: "Ammo not found"});
        }
    };

    /**
     * @Armors routes
     */
    getArmors = async (req: Request, res: Response) => {
        const armors = await this.armorRepository.find();

        return res.json(armors);
    };

    getArmorById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const armor = await this.armorRepository.findOne({where: {id: id}});

        if (armor === null) {
            return res.status(404).json({ message: "This armor id does not exist." });
        }

        return res.json(armor);
    };

    deleteArmorById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.armorRepository.delete(id);

        return res.json({ message: "Armor sucessfully deleted." });
    };

    updateArmor = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const armor = await this.armorRepository.update(id, req.body);

        if (armor.affected === 1) {
            const updatedArmor = await this.armorRepository.findOne({ where: { id: id }});
            return res.json(updatedArmor);
        } else {
            return res.status(404).json({ message: "Armor not found"});
        }
    };

    /**
     * @Items routes
     */
    getItems = async (req: Request, res: Response) => {
        const items = await this.itemsRepository.find();

        return res.json(items);
    };

    getItemById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const item = await this.itemsRepository.findOne({ where: { id: id } });

        return res.json(item);
    };

    deleteItemById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.itemsRepository.delete(id);

        return res.json({ message: "Item sucessfully deleted." });
    };

    updateItem = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const item = await this.itemsRepository.update(id, req.body);

        if (item.affected === 1) {
            const updatedItem = await this.itemsRepository.findOne({ where: { id: id }});
            return res.json(updatedItem);
        } else {
            return res.status(404).json({ message: "Item not found"});
        }
    };

    /**
     * @Shields routes
     */
    getShields = async (req: Request, res: Response) => {
        const shields = await this.shieldsRepository.find();

        return res.json(shields);
    };

    getShieldById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const shield = await this.shieldsRepository.findOne({ where: { id: id } });

        return res.json(shield);
    };

    deleteShieldById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.shieldsRepository.delete(id);

        return res.json({ message: "Shield sucessfully deleted." });
    };

    updateShield = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const shield = await this.shieldsRepository.update(id, req.body);

        if (shield.affected === 1) {
            const updatedShield = await this.shieldsRepository.findOne({ where: { id: id }});
            return res.json(updatedShield);
        } else {
            return res.status(404).json({ message: "Shield not found"});
        }
    };

    /**
     * @Weapons routes
     */
    getWeapons = async (req: Request, res: Response) => {
        const weapons = await this.weaponsRepository.find();

        return res.json(weapons);
    };

    getWeaponById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const weapon = await this.weaponsRepository.findOne({ where: { id: id } });

        return res.json(weapon);
    };

    deleteWeaponById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.weaponsRepository.delete(id);

        return res.json({ message: "Weapon sucessfully deleted." });
    };

    updateWeapon = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const weapon = await this.weaponsRepository.update(id, req.body);

        if (weapon.affected === 1) {
            const updatedWeapon = await this.weaponsRepository.findOne({ where: { id: id }});
            return res.json(updatedWeapon);
        } else {
            return res.status(404).json({ message: "Weapon not found"});
        }
    };

    /**
     * @Talismans routes
     */
    getTalismans = async (req: Request, res: Response) => {
        const talismans = await this.talismansRepository.find();

        return res.json(talismans);
    };

    getTalismanById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const talisman = await this.talismansRepository.findOne({ where: { id: id } });

        return res.json(talisman);
    };

    deleteTalismanById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.talismansRepository.delete(id);

        return res.json({ message: "Talisman sucessfully deleted." });
    };

    updateTalisman = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const talisman = await this.talismansRepository.update(id, req.body);

        if (talisman.affected === 1) {
            const updatedTalisman = await this.talismansRepository.findOne({ where: { id: id }});
            return res.json(updatedTalisman);
        } else {
            return res.status(404).json({ message: "Talisman not found"});
        }
    };

}

export const inventoryController = new InventoryController();
