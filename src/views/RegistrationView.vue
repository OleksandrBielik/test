<template>
  <form @submit.prevent="getToken">
    <h1>Registration</h1>
    <button type="submit">
      SUBMIT
    </button>
  </form>
</template>

<script>

export default {
  name: 'RegistrationView',
  methods: {
    getToken() {
      this.$store.dispatch('auth/getToken').then(res => {
        this.$router.push({ name: 'login' })
        location.reload()
      })
    }
  }
}
</script>


<style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 20%;
    margin: auto auto;
    padding: 20px;
    background-color: rgb(240, 85, 85);
  }
  button {
    max-width: 100px;
  }
  input {
    max-width: 250px;
    margin-bottom: 5px;
  }
</style>
