<template>
  <div class="has-text-centered has-text-grey">
    <b-icon pack="fas" icon="sad-cry" size="is-large"></b-icon>
    <h1 class="subtitle has-text-grey">
      Desculpe, mas não podemos continuar sem a sua localização habilitada
    </h1>
  </div>
</template>

<style lang="scss" scoped>
  div {
    margin-top: 3rem;
  }
  h1 {
    margin-top: 2rem;
  }
</style>

<script>
import store from '../stores';

  export default {
    mounted() {
      store.dispatch('loadGeolocation');
    }
  }
</script>
