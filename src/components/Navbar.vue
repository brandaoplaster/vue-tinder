<template>
  <div>
    <div class="columns is-mobile" v-if="loggedIn">
      <navbar-item path="/user" icon="user" />
      <navbar-item path="/" icon="fire" />
      <navbar-item path="/chat" icon="comments" />
    </div>
    <nav class="navbar" role="navigation" aria-label="main navigation" v-else>
		<div class="navbar-brand">
			<a class="navbar-item" href="#">
				<h3 class="has-text-white">
					Vue-Tinder
				</h3>
			</a>
		</div>
	</nav>
  </div>
</template>

<style lang="scss" scoped>
	nav {
		background-color: #FF6666;
	}
</style>

<script>
import store from '../stores';

  export default {
    components: {
      NavbarItem: () => import('@/components/NavbarItem'),
    },

    computed: {
      loggedIn() {
        return store.getters['isLoggedIn']
      }
    }
  }
</script>