import axios from "axios";
const BASE_URL = "https://bench-api.applover.pl/";

class API {
  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL
    });
    this.token = null;
  }

  login = async ({ email, password }) => {
    const response = await this.axios.post("api/v1/login", {
      email,
      password
    });
    this.token = response.data.token;
    return response;
  };

  fetchOrganization = async ({ token }) => {
    const response = await this.axios.get("api/v1/organization", {
      headers: {
        Authorization: token
      }
    });
    return response;
  };
}

export default new API();
