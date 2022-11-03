import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Items } from "../entity/Items";

class ItemsController {

    public itemsRepository = AppDataSource.getRepository(Items);

    getItems = async (req: Request, res: Response) => {
        const items = await this.itemsRepository.find();

        return res.json(items);
    };

}

export const itemsController = new ItemsController();
