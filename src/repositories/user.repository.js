import { Database } from "../configurations/database.config.js";

export class UserRepository {
  #database;
  /**
   *
   * @param {Database} database
   */
  constructor(database) {
    if (UserRepository.instance) {
      return UserRepository.instance;
    } else {
      this.#database = database;
      UserRepository.instance = this;
    }
  }

  /**
   * 
   * @param {number} id 
   */
  async findById(id){
    return await this.#database.user.findById(id);
  }

  async findAll(){
    return this.#database.user.findAll();
  }
}
