import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Talismans } from "../entity/Talismans";

class TalismansController {

    public talismansRepository = AppDataSource.getRepository(Talismans);

    getTalismans = async (req: Request, res: Response) => {
        const talismans = await this.talismansRepository.find();

        return res.json(talismans);
    };

}

export const talismansController = new TalismansController();
