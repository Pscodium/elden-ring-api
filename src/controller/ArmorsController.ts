import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Armors } from "../entity/Armors";
// import * as jsonItem from '../database/armors.json';

class ArmorsController {

    private armorRepository = AppDataSource.getRepository(Armors);

    getArmors = async (req: Request, res: Response) => {
        const armors = await this.armorRepository.find();

        // for (const item in jsonItem) {
        //     console.log(jsonItem[item])
        //     const obj = {
        //         name: jsonItem[item].name,
        //         image: jsonItem[item].image,
        //         description: jsonItem[item].description,
        //         category: jsonItem[item].category,
        //         dmgNegation: jsonItem[item].dmgNegation,
        //         resistance: jsonItem[item].resistance,
        //         weight: jsonItem[item].weight
        //     };
        //     await this.armorRepository.save(obj)
        // }

        return res.json(armors);
    };

}

export const armorsController = new ArmorsController();
