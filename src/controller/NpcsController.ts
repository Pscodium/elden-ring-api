import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Npcs } from "../entity/Npcs";

class NpcsController {

    public npcsRepository = AppDataSource.getRepository(Npcs);

    getNpcs = async (req: Request, res: Response) => {
        const npcs = await this.npcsRepository.find();

        return res.json(npcs);
    };

    getNpcById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const npc = await this.npcsRepository.findOne({ where: { id: id} });

        return res.json(npc);
    };

    deleteNpcById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.npcsRepository.delete(id);

        return res.json({ message: "Npc sucessfully deleted." });
    };

}

export const npcsController = new NpcsController();
