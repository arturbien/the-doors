import axios from "axios";
const BASE_URL = "https://bench-api.applover.pl/";

class API {
  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL
    });
  }

  login = async ({ email, password }) => {
    // try {
    await this.axios.post("api/v1/login", {
      email,
      password
    });
    // } catch (err) {}
  };
}

export default new API();
