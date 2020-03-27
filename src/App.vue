<template>
  <div id="app">
    <navbar />
    <alert />
    <router-view/>
  </div>
</template>

<script>
export default {
    components: {
      Navbar: () => import('@/components/Navbar'),
      Alert: () => import('@/components/Alert'),
    }
}
</script>
