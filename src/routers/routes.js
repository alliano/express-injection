import expres from "express";
import { UserController } from "../controllers/user.controller.js";
import { AddressController } from "../controllers/address.controller.js";

const routers = expres.Router();
routers.get("/api/v1/users/:id", UserController.findById);

routers.get("/api/v1/users", UserController.findAll)

routers.get("/api/v1/address/:id", AddressController.findById);

routers.get("/api/v1/address", AddressController.findAll)

export { routers };
