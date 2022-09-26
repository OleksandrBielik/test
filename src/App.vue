<template>
  <div id="app">
    <nav>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
      <router-link to="/login">
        Login
      </router-link>
      <button
        type="button"
        @click="onLogout"
      >
        Logout
      </button>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    onLogout() {
      this.$store.dispatch('auth/onLogout')
      location.reload()
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  margin-left: auto;
}
</style>
