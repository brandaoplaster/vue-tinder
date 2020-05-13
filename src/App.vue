<template>
  <div id="app">
    <navbar />
    <alert />
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import router from './router';

export default {
  components: {
    Navbar: () => import('@/components/Navbar'),
    Alert: () => import('@/components/Alert'),
  },

  channels: {
    MatchNotificationChannel: {
      received(data) {
        this.alert({ type: 'success', message: data['message'] });
      }
    }
  },

  computed: {
    ...mapGetters(['isGeolocationEnabled', 'accountToken'])
  },

  watch: {
    isGeolocationEnabled(newValue) {
      if(newValue) router.push('/');
    },

    accountToken(newValue) {
      this.performConnectionBasedOnToken(newValue);
    }
  },

  mounted() {
    this.performConnectionBasedOnToken(this.accountToken);
  },

  methods: {
    ...mapActions('Notification', ['alert']),

    performConnectionBasedOnToken(token) {
      if (token) {
        this.$cable.subscribe({ channel: 'MatchNotificationChannel', token: token });
      } else {
        this.$cable.unsubscribe('MatchNotificationChannel');
      }
    }
  }
}
</script>
