import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Bosses } from "../entity/Bosses";

class BossesController {

    public bossesRepository = AppDataSource.getRepository(Bosses);

    getBosses = async (req: Request, res: Response) => {
        const bosses = await this.bossesRepository.find();

        return res.json(bosses);
    };

}

export const bossesController = new BossesController();
