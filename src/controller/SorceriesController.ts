import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Sorceries } from "../entity/Sorceries";

class SorceriesController {

    public sorceriesRepository = AppDataSource.getRepository(Sorceries);

    getSorceries = async (req: Request, res: Response) => {
        const sorceries = await this.sorceriesRepository.find();

        return res.json(sorceries);
    };

}

export const sorceriesController = new SorceriesController();
