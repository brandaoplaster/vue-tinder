import axios from 'axios';
import store from '../stores';

export default {
  async load() {
    let response = await axios.get('chat', { headers: store.getters['accountHeaders'] });
    return response.data.matches;
  },
}
