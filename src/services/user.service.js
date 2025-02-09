import { HttpException, HttpStatus } from "../exceptions/http.exception.js";
import { UserRepository } from "../repositories/user.repository.js";
import { generateErrorResponse, generateSuccessResponse } from "../utils/genetate.response.js";

export class UserService {
  #userRepository;

  /**
   *
   * @param {UserRepository} userRepository
   */
  constructor(userRepository) {
    if (UserService.instance) {
      return UserService.instance;
    } else {
      this.#userRepository = userRepository;
      UserService.instance = this;
    }
  }

  async findById(id) {
    const user = await this.#userRepository.findById(id);
    if (!user) {
      throw new HttpException(generateErrorResponse("Gagal", "notfound", `address dengan id ${id} tidak ditemykan`), HttpStatus.NOT_FOUND);
    }
    return generateSuccessResponse("Berhsil menampilkan user by id", user)
  }

  async findAll() {
    return {
      message: "Berhasil menampilkan semua user",
      payload: await this.#userRepository.findAll(),
    };
  }
}
