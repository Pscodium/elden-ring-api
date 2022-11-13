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

    updateBoss = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const boss = await this.bossesRepository.update(id, req.body);

        if (boss.affected === 1) {
            const updatedBoss = await this.bossesRepository.findOne({ where: { id: id }});
            return res.json(updatedBoss);
        } else {
            return res.status(404).json({ message: "Boss not found"});
        }
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

    updateCreature = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const creatures = await this.creaturesRepository.update(id, req.body);

        if (creatures.affected === 1) {
            const updatedCreatures = await this.creaturesRepository.findOne({ where: { id: id }});
            return res.json(updatedCreatures);
        } else {
            return res.status(404).json({ message: "Creature not found"});
        }
    };

}

export const enemiesController = new EnemiesController();
