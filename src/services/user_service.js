import axios from 'axios';
import store from '../stores';

export default {
  async load(id) {
    let response = await axios.get(`users/${id}`, { headers: store.getters['accountHeaders'] });
    return response.data;
  }
}
