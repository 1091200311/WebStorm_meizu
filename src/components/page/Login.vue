<template>
  <div>
  <div class="header">
    <router-link to="/">
      <b-navbar-brand>
        <b-img width="85" height="50" src="../static/img/meizu.png"/>
      </b-navbar-brand>
    </router-link>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
    }
</script>

<style scoped>
.header{
  height: auto;
  padding-top: 28px;
  padding-bottom: 40px;
}
</style>
