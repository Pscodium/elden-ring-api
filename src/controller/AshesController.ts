import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Ashes } from "../entity/Ashes";

class AshesController {

    public ashesRepository = AppDataSource.getRepository(Ashes);

    getAshes = async (req: Request, res: Response) => {
        const ashes = await this.ashesRepository.find();

        return res.json(ashes);
    };

}

export const ashesController = new AshesController();
