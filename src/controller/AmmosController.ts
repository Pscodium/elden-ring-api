import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Ammos } from "../entity/Ammos";
// import * as ammosJson from "../database/ammos.json";

class AmmosController {

    private ammoRepository = AppDataSource.getRepository(Ammos);

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

    createAmmo = async (req: Request, res: Response) => {
        const ammoBody = req.body;

        if (
            !ammoBody.name ||
            !ammoBody.image ||
            !ammoBody.description ||
            !ammoBody.type ||
            !ammoBody.attackPower) {
            return res.status(404).json({ message: "fill in the fields name, image, description, type, attackPower." });
        }

        const ammo = await this.ammoRepository.save(ammoBody);

        return res.json(ammo);
    };

    deleteAmmoById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.ammoRepository.delete(id);

        return res.json({ message: "ammo sucessfully deleted." });
    };

}

export const ammosController = new AmmosController();
