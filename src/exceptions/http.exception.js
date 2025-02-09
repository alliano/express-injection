export class HttpException extends Error {
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

export class HttpStatus {
  static OK = 200;
  static NOT_FOUND = 404;
  static BAD_REQUEST = 400;
  static INTERNAL_SERVER_ERROR = 500;
}
