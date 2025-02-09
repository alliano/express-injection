import { Database } from "../configurations/database.config.js";

export class AddressRepository {
  /**
   * @type {Database}
   */
  #database;
  /**
   *
   * @param {Database} database
   */
  constructor(database) {
    if (AddressRepository.instance) {
      return AddressRepository.instance;
    } else {
      this.#database = database;
      AddressRepository.instance = this;
    }
  }

  /**
   * 
   * @param {number} id 
   */
  async findById(id){
    return await this.#database.address.findById(id);
  }

  async findAll(){
    return await this.#database.address.findAll();
  }
}
