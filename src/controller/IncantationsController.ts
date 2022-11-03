import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Incantations } from "../entity/Incantations";

class IncantationsController {

    public incantationsRepository = AppDataSource.getRepository(Incantations);

    getIncantations = async (req: Request, res: Response) => {
        const incantations = await this.incantationsRepository.find();

        return res.json(incantations);
    };

}

export const incantationsController = new IncantationsController();
