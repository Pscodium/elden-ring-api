import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Armors } from "../entity/Armors";
// import * as jsonItem from '../database/armors.json';

class ArmorsController {

    private armorRepository = AppDataSource.getRepository(Armors);

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

}

export const armorsController = new ArmorsController();
