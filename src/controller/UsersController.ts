import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Users } from "../entity/Users";
import { Permission, Permissions } from "../entity/Permission";

class UsersController {

    public usersRepository = AppDataSource.getRepository(Users);
    public permissionsRepository = AppDataSource.getRepository(Permission);

    registerUser = async ( req: Request, res: Response ) => {
        const { name, email, password } = req.body;

        const userExists = await this.usersRepository.findOne({ where: { email }});

        if (userExists) {
            return res.sendStatus(409);
        }


        const user = this.usersRepository.create({ name, email, password });
        await this.usersRepository.save(user);

        return res.json(user);
    };

    getUserData = async (req: Request, res: Response) => {
        const { id } = req.params;

        const user = await this.usersRepository.findOne({ where: { id }});

        const perms = await this.permissionsRepository.find({ where: {userId: user?.id}});
        const permissions: string[] = [];
        perms.map((perm) => {
            permissions.push((perm.permission));
        });

        delete user.password;

        return res.json({user, permissions});
    };

    checkAuth = async (req: Request, res: Response) => {
        const id = req.userId;

        const user = await this.usersRepository.findOne({ where: { id }});

        const perms = await this.permissionsRepository.find({ where: {userId: user?.id}});
        const permissions: string[] = [];
        perms.map((perm) => {
            permissions.push((perm.permission));
        });

        delete user.password;

        return res.json({user, permissions});
    };

    setPermission = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { permission } = req.body;
        const userId = req.userId;
        const reqUser = await this.usersRepository.findOne({ where: { id: userId }});

        const listPerms = await this.permissionsRepository.find({ where: { userId: id } });

        try {
            listPerms.map((perm) => {
                if (perm.permission === permission) {
                    return res.status(404).json({ message: "This user already has this permission"});
                }
            });
        } catch {
            return res.status(404).json({ message: "Error to set permissions"});
        }

        if (reqUser?.role != "admin") {
            return res.status(404).json({ message: "You don't have permission to set permissions."});
        }


        const permissions = this.permissionsRepository.create({
            permission: permission,
            userId: id,
            isActive: true,
        });
        this.permissionsRepository.save(permissions);
        return res.json(permissions);

    };

    setRole = async ( req: Request, res: Response ) => {
        const { id } = req.params;
        const { role } = req.body;
        const reqUserPerm = await this.permissionsRepository.findBy({ userId: id, permission: Permissions.ADMIN });

        if (!reqUserPerm.length) {
            return res.status(404).json({ message: "You don't have permission to this."});
        }

        await this.usersRepository.update(id, { role: role});

        return res.json({ message: "User role sucessfully seted." });

    };

}
export const usersController = new UsersController();
