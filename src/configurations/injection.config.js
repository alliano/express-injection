import { AddressRepository } from "../repositories/address.repository.js";
import { UserRepository } from "../repositories/user.repository.js";
import { AddressService } from "../services/address.service.js";
import { UserService } from "../services/user.service.js";
import { Database } from "./database.config.js";

const database = new Database();
const userRepository = new UserRepository(database);
const userService = new UserService(userRepository);

const addressRepository = new AddressRepository(database);
const addressService = new AddressService(addressRepository);

export { userService as UserService, addressService as AddressService };
