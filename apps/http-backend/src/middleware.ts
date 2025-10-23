import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "11111"


export function middleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"] ?? ""

    const decoded = jwt.verify(token, JWT_SECRET) as {username: string}

    if (decoded){
        req.userId = decoded.username 
        next()
    } else {
        res.status(403).json({
            message: "unauthorized"
        })
    }
}