import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Weapons } from "../entity/Weapons";

class WeaponsController {

    public weaponsRepository = AppDataSource.getRepository(Weapons);

    getWeapons = async (req: Request, res: Response) => {
        const weapons = await this.weaponsRepository.find();

        return res.json(weapons);
    };

}

export const weaponsController = new WeaponsController();
