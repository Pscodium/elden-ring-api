import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Spirits } from "../entity/Spirits";

class SpiritsController {

    public spiritsRepository = AppDataSource.getRepository(Spirits);

    getSpirits = async (req: Request, res: Response) => {
        const spirits = await this.spiritsRepository.find();

        return res.json(spirits);
    };

}

export const spiritsController = new SpiritsController();
