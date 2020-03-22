<template>
  <div id="app">
    <navbar />
    <alert />
    <router-view/>
  </div>
</template>

<script>
export default {
    comments: {
      Navbar: () => import('@/components/Navbar'),
      Alert: () => import('@/componentes/Alert'),
    }
}
</script>
