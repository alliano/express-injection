import { AddressService } from "../configurations/injection.config.js";

export class AddressController {
  /**
   *
   * @param {Request} request
   * @param {Response} response
   * @param {import("express").NextFunction} nextFunction
   */
  static async findById(request, response, nextFunction) {
    try {
      const reuslt = await AddressService.findById(request.params.id);
      response.status(200).json(reuslt);
    } catch (error) {
      nextFunction(error);
    }
  }

  /**
   *
   * @param {Request} request
   * @param {Response} response
   * @param {import("express").NextFunction} nextFunction
   */
  static async findAll(request, response, nextFunction) {
    try {
      const reuslt = await AddressService.findAll();
      response.status(200).json(reuslt);
    } catch (error) {
      nextFunction(error);
    }
  }
}
