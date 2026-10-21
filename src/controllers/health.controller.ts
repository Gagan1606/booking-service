import { Request, Response } from "express";
import healthSchema from "../schema/health.schema.js"
async function getHealthHandler(_req: Request, res: Response){
    const result = healthSchema.safeParse({ status: "ok" });

    if (!result.success) {
        return res.status(400).json({ error: result.error });
    }

    return res.json(result.data);
}
export {getHealthHandler};
