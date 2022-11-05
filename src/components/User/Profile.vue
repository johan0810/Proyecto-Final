<template>
  <div class="container-body" id="contain1">
    <div class="container" id="contain2">
      <nav id="nav2">
        <div class="foto"></div>
        <!-- <div class="p"><h1>Mi Perfil</h1></div> -->
      </nav>
      <div class="profile">
        <p>{{ user.name }}</p>
        <p>{{ user.email }}</p>
      </div>
    </div>
    <div class="d">
      <!-- <button class="btn btn-primary" type="button" @click="logout()">Cerrar Sesion</button> -->
    </div>
  </div>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\User\Cuenta.css);
</style>

<script>
export default {
  components: {},
  data() {
    return {
      token: null,
      user: {},
    };
  },

  mounted() {
    if (localStorage.token) {
      this.token = localStorage.token;
      this.user = JSON.parse(localStorage.user);

      this.get_user();
    } else {
      this.$router.push({
        name: "Login",
        params: {
          message: "¡Inicia sesión nuevamente!",
        },
      });
    }
  },

  methods: {
    async get_user() {
      try {
        console.log(this.token);

        const rs = await this.axios.get("/api/user", {
          headers: { Authorization: `Bearer ${this.token}` },
        });
        this.user = rs.data.user;
      } catch (e) {
        this.$router.push({
          name: "Home",
          params: {
            message: "no estas autorizado",
          },
        });
      }
    },
    // async logout() {
    //   try {
    //     const rs = await this.axios.get("/api/logout", {
    //       headers: { Authorization: `Bearer ${this.token}` },
    //     });

    //     localStorage.clear();

    //     this.$router.push({
    //       name: "Home",
    //       params: {
    //         message: rs.data.message,
    //       },
    //     });
    //   } catch (e) {
    //     this.$router.push({
    //       name: "Home",
    //       params: {
    //         message: e.response.data.message,
    //       },
    //     });
    //   }
    // },
  },
};
</script>
