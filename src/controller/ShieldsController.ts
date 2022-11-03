import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Shields } from "../entity/Shields";

class ShieldsController {

    public shieldsRepository = AppDataSource.getRepository(Shields);

    getShields = async (req: Request, res: Response) => {
        const shields = await this.shieldsRepository.find();

        return res.json(shields);
    };

}

export const shieldsController = new ShieldsController();
