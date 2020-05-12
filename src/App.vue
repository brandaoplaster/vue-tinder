<template>
  <div id="app">
    <navbar />
    <alert />
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from './router';

export default {
  components: {
    Navbar: () => import('@/components/Navbar'),
    Alert: () => import('@/components/Alert'),
  },

  computed: {
    ...mapGetters(['isGeolocationEnabled']);
  },

  watch: {
    isGeolocationEnabled(newValue) {
      if(newValue) router.push('/');
    }
  }
}
</script>
