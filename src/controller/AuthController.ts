import "reflect-metadata";
import * as dotenv from 'dotenv';
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Users } from "../entity/Users";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Permission } from "../entity/Permission";

class AuthController {

    public env = dotenv.config();
    public usersRepository = AppDataSource.getRepository(Users);
    public permissionRepository = AppDataSource.getRepository(Permission);

    authenticate = async ( req: Request, res: Response ) => {
        const { email, password } = req.body;

        const user = await this.usersRepository.findOne({ where: { email } });

        if (!user) {
            return res.sendStatus(404).json({ message: "Email does not exist."});
        }

        try {
            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                return res.sendStatus(401);
            }
        } catch {
            return res.sendStatus(401);
        }

        const token = jwt.sign({ id: user.id }, String(process.env.JWT_SECRET_KEY), { expiresIn: "1d"});


        const perms = await this.permissionRepository.find({ where: {userId: user?.id}});
        const permissions: string[] = [];
        perms.map((perm) => {
            permissions.push((perm.permission));
        });

        delete user.password;

        return res.json({user, token, permissions});
    };

}
export const authController = new AuthController();
