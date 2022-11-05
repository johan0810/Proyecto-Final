<template>
  <div class="container-body">
    <div class="container">
      <div id="resetear">
        <h1>Ingresa El Correo Registrado</h1>
      </div>
      <form>
        <div class="container-main">
          <label for=""><h1>Email:</h1> </label>
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="@..."
            v-model="email" 
          />
          <div class="message">
          <span v-if="errors.email">{{ errors.email[0] }}</span>
          </div> 

          <button  id="boton" class="btn btn-primary" @click="send_email()" type="button">
            Enviar Correo
          </button>
          <p v-if="message">{{ message }}</p>
        </div>
      </form>
    </div>
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

      email: "",
      password: "",

      errors: {},
    };
  },

  mounted() {
    if (this.$route.params.message) this.message = this.$route.params.message;
  },

  methods: {
    async send_email() {
      try {
        const rs = await this.axios.post("/api/forgot-password", {
          email: this.email,
        });
        this.$router.push({
          name: "Login",
          params: { message: rs.data.message },
        });
        localStorage.token = rs.data.token;
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
