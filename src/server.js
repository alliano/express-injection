import "dotenv/config";
import { env } from "process";
import express from "express";
import { log } from "console";
import { routers } from "./routers/routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const APP_PORT = env.APP_PORT;
const APP_HOST = env.APP_HOST;

const app = express();
app.use(express.json());
app.use(routers);
app.use(errorMiddleware)

app.listen(APP_PORT, APP_HOST, () => log(`Server berjalan pada ${APP_HOST}:${APP_PORT}`))