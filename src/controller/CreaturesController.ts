import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Creatures } from "../entity/Creatures";

class CreaturesController {

    public creaturesRepository = AppDataSource.getRepository(Creatures);

    getCreatures = async (req: Request, res: Response) => {
        const creatures = await this.creaturesRepository.find();

        return res.json(creatures);
    };

}

export const creaturesController = new CreaturesController();
