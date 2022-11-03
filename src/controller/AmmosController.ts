import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Ammos } from "../entity/Ammos";
// import * as ammosJson from "../database/ammos.json";

class AmmosController {

    private ammoRepository = AppDataSource.getRepository(Ammos);

    getAmmos = async (req: Request, res: Response) => {
        const ammos = await this.ammoRepository.find();

        // for (const ammo in ammosJson) {
        //     console.log(ammosJson[ammo])
        //     const obj = {
        //         name: ammosJson[ammo].name,
        //         image: ammosJson[ammo].image,
        //         description: ammosJson[ammo].description,
        //         type: ammosJson[ammo].type,
        //         attackPower: ammosJson[ammo].attackPower,
        //         passive: ammosJson[ammo].passive
        //     };
        //     await this.ammoRepository.save(obj)
        // }

        return res.json(ammos);
    };

}

export const ammosController = new AmmosController();
