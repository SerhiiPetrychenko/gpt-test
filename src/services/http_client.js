import axios from "axios";

export default {
  apiUrl() {
    return process.env.VUE_APP_API_URL;
  },
  async get(url, data = {}, headers = {}) {
    return await axios.get(url, { data, headers });
  },
  async getAuth(url, data = {}, headers = {}) {
    try {
      return await axios.get(url, {
        data,
        headers: Object.assign(this.getAuthHeader(), headers),
      });
    } catch (e) {
      if (e.response.status === 401) {
        await this.refreshToken();
        return await axios.get(url, {
          data,
          headers: Object.assign(this.getAuthHeader(), headers),
        });
      } else {
        throw e;
      }
    }
  },
  async post(url, data = {}, headers = {}) {
    return await axios.post(url, data, { headers: headers });
  },
  async postAuth(url, data = {}, headers = {}) {
    try {
      return await axios.post(url, data, {
        headers: Object.assign(this.getAuthHeader(), headers),
      });
    } catch (e) {
      if (e.response && e.response.status === 401) {
        await this.refreshToken();
        return await axios.post(url, data, {
          headers: Object.assign(this.getAuthHeader(), headers),
        });
      } else {
        throw e;
      }
    }
  },
  async delete(url, data = {}, headers = {}) {
    return await axios.delete(url, { data, headers });
  },
  async deleteAuth(url, data = {}, headers = {}) {
    try {
      return await axios.delete(url, {
        data,
        headers: Object.assign(this.getAuthHeader(), headers),
      });
    } catch (e) {
      if (e.response.status === 401) {
        await this.refreshToken();
        return await axios.get(url, {
          data,
          headers: Object.assign(this.getAuthHeader(), headers),
        });
      } else {
        throw e;
      }
    }
  },
  async refreshToken() {
    try {
      const response = await axios.post(
        `${this.apiUrl()}/refresh_token`,
        {},
        { headers: this.getAuthHeader() }
      );
      const { user, access_token } = response?.data?.data || {};
      localStorage.setItem("jwt", access_token);
      localStorage.setItem("user", JSON.stringify(user));
      return access_token;
    } catch (e) {
      console.log("ERROR:", e);
      throw e;
    }
  },
  getAuthHeader() {
    return { Authorization: `Bearer ${localStorage.getItem("jwt")}` };
  },
  async downloadFile(data) {
    try {
      const host_arr = window.location.origin.split(':');
      const host = `${host_arr[0]}:${host_arr[1]}:3000`;
      const response = await axios({
        url: `${host}/${data.url}`,
        method: 'GET',
        responseType: 'blob',
      });

      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fileLink = document.createElement('a');
      fileLink.href = fileURL;
      fileLink.setAttribute('download', data.fileName);
      document.body.appendChild(fileLink);
      fileLink.click();
    } catch (e) {
      console.log("ERROR:", e);
      throw e;
    }
  }
};
