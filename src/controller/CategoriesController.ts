import { AppDataSource } from "../data-source";
import { Categories } from "../entity/Categories";
import { Request, Response } from 'express';


class CategoriesController {

    private categoriesRepository = AppDataSource.getRepository(Categories);

    getCategories = async ( req: Request, res: Response ) => {
        const categories = await this.categoriesRepository.find();

        return res.json(categories);
    };
}
export const categoriesController = new CategoriesController();
