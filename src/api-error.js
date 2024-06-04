class ApiError {
  constructor(status, message) {
    this.status = status;
    this.message = message.replace(/\n/g, '');
  }
}

export default ApiError;