import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Classes } from "../entity/Classes";

class ClassesController {

    public classesRepository = AppDataSource.getRepository(Classes);

    getClasses = async (req: Request, res: Response) => {
        const classes = await this.classesRepository.find();

        return res.json(classes);
    };

}

export const classesController = new ClassesController();
