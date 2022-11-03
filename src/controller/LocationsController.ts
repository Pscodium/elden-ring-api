import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Locations } from "../entity/Locations";

class LocationsController {

    public locationsRepository = AppDataSource.getRepository(Locations);

    getLocations = async (req: Request, res: Response) => {
        const locations = await this.locationsRepository.find();

        return res.json(locations);
    };

}

export const locationsController = new LocationsController();
