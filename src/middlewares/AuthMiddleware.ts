import "reflect-metadata";
import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';

dotenv.config();

interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.sendStatus(401);
    }

    const token = authorization.replace("Bearer", '').trim();

    try {
        const data = jwt.verify(token, String(process.env.JWT_SECRET_KEY));

        const { id } = data as TokenPayload;

        req.userId = id;

        return next();
    } catch {
        return res.sendStatus(401);
    }
}
