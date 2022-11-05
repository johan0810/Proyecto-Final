<template>

  <p>{{ message }}</p>

  <div class="container">
    <form>
      <label for=""><h1>Email:</h1> </label>
      <input
        class="form-control"
        type="email"
        name="email"
        v-model="form.email"
      />


      <label for=""><h1>Password:</h1></label>
      <input
        class="form-control"
        type="password"
        name="password"
        v-model="form.password"
      />
   

      <label for=""><h1>Confimation:</h1></label>
      <input
        class="form-control"
        type="password"
        name="password_confirmation"
        v-model="form.password_confirmation"
      />
      <div class="message">
          <span v-if="errors.email">{{ errors.email[0] }}</span>
          </div> 

      <button class="btn btn-dark" @click="ResetPassword()" type="button" id="boton">
        Actualizar
      </button>

      <p v-if="message">{{ message }}</p>
    </form>
  </div>
</template>
<style scoped>
@import url(/src\assets\Proyecto\Estilos\Default\Password.css);
</style>
<script>
export default {
  data() {
    return {
      message: null,
      form: {
        email: null,
        token: null,
        password: "",
        password_confirmation: "",
      },
      errors: {},
    };
  },

  mounted() {
    if (this.$route.query.token) this.form.token = this.$route.query.token;
  },

  methods: {
    async ResetPassword() {
      try {
        const rs = await this.axios.post("/api/reset-password", this.form);
        this.$router.push({
          name: "Login",

          params: { message: rs.data.message },
        });
        // localStorage.token = rs.data.token;
      } catch (e) {
        this.errors = {};
        this.message = null;

        if (e.response.data.errors) this.errors = e.response.data.errors;
        else if (e.response.data.message)
          this.message = e.response.data.message;
      }
    },
  },
};
</script>
