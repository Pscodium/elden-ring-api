import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Locations } from "../entity/Locations";

class LocationsController {

    public locationsRepository = AppDataSource.getRepository(Locations);

    getLocations = async (req: Request, res: Response) => {
        const locations = await this.locationsRepository.find();

        return res.json(locations);
    };

    getLocationById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const location = await this.locationsRepository.findOne({ where: { id: id } });

        return res.json(location);
    };

    deleteLocationById = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        await this.locationsRepository.delete(id);

        return res.json({ message: "Location sucessfully deleted." });
    };

    updateLocation = async (req: Request, res: Response) => {
        const id = Number(req.params.id);

        const location = await this.locationsRepository.update(id, req.body);

        if (location.affected === 1) {
            const updatedLocation = await this.locationsRepository.findOne({ where: { id: id }});
            return res.json(updatedLocation);
        } else {
            return res.status(404).json({ message: "Location not found"});
        }
    };

}

export const locationsController = new LocationsController();
