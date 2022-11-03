import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Ammos } from "../entity/Ammos";

class AmmosController {

    private ammoRepository = AppDataSource.getRepository(Ammos);

    // async all(request: Request, response: Response, next: NextFunction) {
    //     return this.ammoRepository.find()
    // }

    // async one(request: Request, response: Response, next: NextFunction) {
    //     return this.ammoRepository.findOne(request.params.id)
    // }

    // async save(request: Request, response: Response, next: NextFunction) {
    //     return this.ammoRepository.save(request.body)
    // }

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     let userToRemove = await this.userRepository.findOneBy({ id: request.params.id })
    //     await this.ammoRepository.remove(userToRemove)
    // }

}

export const ammosController = new AmmosController();
