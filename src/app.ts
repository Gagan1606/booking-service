import express from "express";
import healthSchema from "./schema/health.schema.js";
import errorMiddleWare from "./middleware/error.middleware.js";
import healthRouter from "./routes/health.routes.js";

const app = express();

app.use(express.json());
app.use('/health', healthRouter);

app.get("/test-error", () => { throw new Error("Test error"); });

app.use(errorMiddleWare);


export default app;