<template>
  <p>{{ message }}</p>

  <br />
  <div class="container">
    <form>
        
        <label for="">Email:</label>
      <input type="email" name="email" v-model="form.email" />
      <span v-if="errors.email">{{ errors.email[0] }}</span>
      <br>
<br>
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
      <span v-if="errors.password">{{
        errors.password[0]
      }}</span>
      <br />
      <br />

      <button @click="ResetPassword()" type="button">Actualizar</button>

      <br />
      <p v-if="message">{{ message }}</p>
      <br />
    </form>
  </div>
</template>

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
