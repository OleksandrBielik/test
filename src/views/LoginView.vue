<template>
  <form
    v-if="!userName"
    @submit.prevent="onSubmit"
  >
    <div v-if="userRole === 'guest'">
      <button
        class="screen-blocker"
        type="button"
      >
        <router-link
          class="link"
          to="/registration"
        >
          Registration
        </router-link>
      </button>
    </div>
    <input
      v-model.trim="login"
      type="text"
      placeholder="Login"
      required
    >
    <input
      v-model.trim="password"
      type="password"
      placeholder="Password"
      required
    >
    <button type="submit">
      SUBMIT
    </button>
  </form>
  <div v-else>
    You have already logged in {{ userName }}
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  data() {
    return {
      login: '',
      password: '',
    }
  },
  computed: {
    userRole() {
      return this.$store.getters['auth/getUserRole']
    },
    token() {
      return this.$store.getters['auth/getToken']
    },
    userName() {
      return this.$store.getters['auth/getUserName']
    }
  },
  mounted() {
    localStorage.setItem('userRole', this.$store.getters['auth/getUserRole'])
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('auth/setUserName', { name: this.login })
      window.location.href = `https://www.themoviedb.org/authenticate/${this.token}?redirect_to=http://localhost:8080`
      // this.$store.dispatch('auth/onLogin', {
      //   login: this.login,
      //   password: this.password
      // }).then(() => this.$router.push({ name: 'home' }))
    },
    getToken() {
      this.$store.dispatch('auth/getToken').then(console.log)
    }
  }
}
</script>


<style lang="scss" scoped>
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 20%;
    margin: auto auto;
    padding: 20px;
    background-color: gray;
  }
  button {
    max-width: 100px;
  }
  input {
    max-width: 250px;
    margin-bottom: 5px;
  }
  .screen-blocker {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    opacity: 0.8;
    min-width: 100%;
    height: 100%;
  }
  .link {
    text-decoration: none;
    color: #000;
    background-color: #fff;
  }
</style>
