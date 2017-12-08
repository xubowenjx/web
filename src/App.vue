<style>
body {
    background-image: url('./assets/images/background-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: center center;
}
#app {
  font-family: "Open Sans",'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<template>
  <div id="app">
    <router-view/>
    <BackTop></BackTop>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

