<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
export default {
    comments: {
      Navbar: () => import('@/components/Navbar'),
    }
}
</script>
