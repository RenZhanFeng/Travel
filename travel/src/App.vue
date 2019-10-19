<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <br>
    <router-link to="/">首页</router-link>
    <br>
    <router-link to="/login">login</router-link>
    <br>
    <router-link to="/index">index</router-link>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
