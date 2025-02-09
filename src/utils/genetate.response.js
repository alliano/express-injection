export function generateErrorResponse(error, type, message) {
  console.log(error, type, message)
  return {
    message: error,
    errors: [
      {
        type: type,
        message: message
      }
    ]
  };
}

export function generateSuccessResponse(message, payload) {
  return {
    message: message,
    payload: payload,
  };
}
