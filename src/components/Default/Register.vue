<template>
 
  <div class="container">
    <form>
      <label for="">Name:</label>
      <input type="name" name="name" v-model="form.name" />
      <br />
      <br />

      <label for="">Email:</label>
      <input type="email" name="email" v-model="form.email" />
      <span v-if="errors.email">{{ errors.email[0] }}</span>
      <br />
      <br />

      <label for="">Password:</label>
      <input type="password" name="password" v-model="form.password" />
      <span v-if="errors.password">{{ errors.password[0] }}</span>
      <br />
      <br />
      <label for="">Confirmation:</label>
      <input
        type="password"
        name="password_confirmation"
        v-model="form.password_confirmation"
      />
      <span v-if="errors.password">{{ errors.password[0] }}</span>
      <br />
      <button @click="Register()" type="button" class="btn">Registrarse</button>

      <br />
      <p v-if="message">{{ message }}</p>
      <br />
    </form>
  </div>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Register.css);
</style>

<script>
export default {
  data() {
    return {
      message: null,
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        token: null,
      },
      errors: {},
    };
  },

  methods: {
    async Register() {
      try {
        const rs = await this.axios.post("/api/register", this.form);
        this.$router.push({
          name: "Home",
          params: {
            message:rs.data.message,
          },
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

