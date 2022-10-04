<template>
  <div class="container">
    <div id="resetear">
      <h4>Ingresar Correo Registrado</h4>
    </div>
  </div>

  <form>
    <label for="">Email:</label>
    <input type="email" name="email" v-model="email" />
    <span v-if="errors.email">{{ errors.email[0] }}</span>
    <br />
    <button @click="send_email()" type="button">Enviar Correo</button>
    <p v-if="message">{{ message }}</p>
    <br />
  </form>
</template>

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
