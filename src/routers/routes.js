import expres from "express";
import { UserController } from "../controllers/user.controller.js";
import { AddressController } from "../controllers/address.controller.js";
import { apiKeyMeddleware } from "../middlewares/apiKey.middleware.js";
import { tokenMiddleware } from "../middlewares/token.middleware.js";

const routers = expres.Router();
routers.get("/api/v1/users/:id", UserController.findById);

routers.get("/api/v1/users", tokenMiddleware, UserController.findAll);

routers.get("/api/v1/mobile/users", apiKeyMeddleware, UserController.findAll);

routers.get("/api/v1/address/:id", AddressController.findById);

routers.get("/api/v1/address", AddressController.findAll)

export { routers };
