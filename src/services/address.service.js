import { HttpException, HttpStatus } from "../exceptions/http.exception.js";
import { AddressRepository } from "../repositories/address.repository.js";
import { generateErrorResponse, generateSuccessResponse } from "../utils/genetate.response.js";

export class AddressService {

  
  #addressRepository;
  /**
   *
   * @param {AddressRepository} addressRepository
   */
  constructor(addressRepository) {
    if (AddressService.instance) {
      return AddressService.instance;
    } else {
      this.#addressRepository = addressRepository;
      AddressService.instance = this;
    }
  }

  async findById(id) {
    const address = await this.#addressRepository.findById(id);
    if (!address) {
      throw new HttpException(generateErrorResponse("Gagal", "notfound", `address dengan id ${id} tidak ditemykan`), HttpStatus.NOT_FOUND);
    }
    return generateSuccessResponse("Berhasil menampilkan address by id", address);
  }

  async findAll() {
    const addresses = await this.#addressRepository.findAll();
    return generateSuccessResponse("Berhasil menampilkan semua address", addresses);
  }
}
