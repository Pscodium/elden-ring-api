import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Ashes } from "../entity/Ashes";
import { Incantations } from "../entity/Incantations";
import { Sorceries } from "../entity/Sorceries";
import { Spirits } from "../entity/Spirits";


class EnemiesController {

    public ashesRepository = AppDataSource.getRepository(Ashes);
    public incantationsRepository = AppDataSource.getRepository(Incantations);
    public sorceriesRepository = AppDataSource.getRepository(Sorceries);
    public spiritsRepository = AppDataSource.getRepository(Spirits);

    /**
     * @Ashes routes
     */
    getAshes = async (req: Request, res: Response) => {
        const ashes = await this.ashesRepository.find();

        return res.json(ashes);
    };

    getAsheById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const ashe = await this.ashesRepository.findOne({ where: { id: id } });

        return res.json(ashe);
    };

    deleteAsheById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.ashesRepository.delete(id);

        return res.json({ message: "Ashe sucessfully deleted."});
    };

    /**
     * @Incantations routes
     */
    getIncantations = async (req: Request, res: Response) => {
        const incantations = await this.incantationsRepository.find();

        return res.json(incantations);
    };

    getIncantationById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const incantation = await this.incantationsRepository.findOne({ where: { id: id } });

        return res.json(incantation);
    };

    deleteIncantationById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.incantationsRepository.delete(id);

        return res.json({ message: "Incantation sucessfully deleted." });
    };

    /**
     * @Sorceries routes
     */
    getSorceries = async (req: Request, res: Response) => {
        const sorceries = await this.sorceriesRepository.find();

        return res.json(sorceries);
    };

    getSorcerieById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const sorcerie = await this.sorceriesRepository.findOne({ where: { id: id } });

        return res.json(sorcerie);
    };

    deleteSorcerieById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.sorceriesRepository.delete(id);

        return res.json({ message: "Sorcerie sucessfully deleted." });
    };

    /**
     * @Spirits routes
     */
    getSpirits = async (req: Request, res: Response) => {
        const spirits = await this.spiritsRepository.find();

        return res.json(spirits);
    };

    getSpiritById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const spirit = await this.spiritsRepository.findOne({ where: { id: id } });

        return res.json(spirit);
    };

    deleteSpiritById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.spiritsRepository.delete(id);

        return res.json({ message: "Spirit sucessfully deleted." });
    };

}

export const magicController = new EnemiesController();
