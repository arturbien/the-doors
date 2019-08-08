import axios from "axios";
const BASE_URL = "https://bench-api.applover.pl/";

class API {
  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL
    });
  }

  login = async ({ email, password }) => {
    const query = `https://api.coingecko.com/api/v3/events?upcoming_events_only=${true}`;

    try {
      const response = await this.axios.post("api/v1/login", {
        email,
        password
      });
      console.log(response);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
}

export default new API();
