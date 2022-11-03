import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Npcs } from "../entity/Npcs";

class NpcsController {

    public npcsRepository = AppDataSource.getRepository(Npcs);

    getNpcs = async (req: Request, res: Response) => {
        const npcs = await this.npcsRepository.find();

        return res.json(npcs);
    };

}

export const npcsController = new NpcsController();
