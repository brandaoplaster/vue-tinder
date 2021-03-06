import axios from 'axios';
import store from '../stores';

export default {
  async login(email, password) {
    let response = await axios.post("users/sign_in", { user: { email: email, password: password } })
    return response.data;
  },

  async signUp(name, email, password, passwordConfirmation) {
    let response = await axios.post("users", { name: name, email: email, password: password, passwordConfirmation: passwordConfirmation })
    return response
  },

  async update(id, name, college, company, description) {
    let headers = store.getters['accountHeaders'];
    headers['Content-Type'] = 'application/json';
    let response = await axios.patch(`users/${id}`, {
      user: {
        name: name,
        college: college,
        company: company,
        description: description
      }}, { headers: headers });
    return response.data;
  },

  async setGeolocation(id, lat, long) {
    let response = await axios.patch(`users/${id}`, { user: { latitude: lat, longitude: long } }, { headers: store.getters['accountHeaders'] })
    return response.data;
  }
}
