import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Classes } from "../entity/Classes";

class ClassesController {

    public classesRepository = AppDataSource.getRepository(Classes);

    getClasses = async (req: Request, res: Response) => {
        const classes = await this.classesRepository.find();

        return res.json(classes);
    };

    getClassesById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const classes = await this.classesRepository.findOne({ where: { id : id }});

        return res.json(classes);
    };

    deleteClassById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.classesRepository.delete(id);

        return res.json({ message: "Class sucessfully deleted." });
    };

}

export const classesController = new ClassesController();
