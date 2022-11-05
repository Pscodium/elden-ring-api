import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Bosses } from "../entity/Bosses";
import { Creatures } from "../entity/Creatures";

class EnemiesController {

    public bossesRepository = AppDataSource.getRepository(Bosses);
    public creaturesRepository = AppDataSource.getRepository(Creatures);

    /**
     * @Bosses routes
     */
    getBosses = async (req: Request, res: Response) => {
        const bosses = await this.bossesRepository.find();

        return res.json(bosses);
    };

    getBossById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const boss = this.bossesRepository.findOne({ where: { id: id } });

        return res.json(boss);
    };

    deleteBossById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.bossesRepository.delete(id);

        return res.json({ message: "Boss sucessfully deleted." });
    };

    /**
     * @Creatures routes
     */
    getCreatures = async (req: Request, res: Response) => {
        const creatures = await this.creaturesRepository.find();

        return res.json(creatures);
    };

    getCreatureByid = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const creature = await this.creaturesRepository.findOne({ where: { id: id }});

        return res.json(creature);
    };

    deleteCreatureById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.creaturesRepository.delete(id);

        return res.json({ message: "Creature sucessfully deleted." });
    };

}

export const enemiesController = new EnemiesController();
