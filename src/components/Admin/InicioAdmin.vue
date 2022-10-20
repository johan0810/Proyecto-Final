<template>
  <div class="seccion">
    <!-- <router-link class="link" to="/admin/agregar_pregunta">
      <div id="secciones">PREGUNTAS</div>
    </router-link>
    <router-link class="link" to="/admin/agregar_respuesta">
      <div id="secciones">Respuestas</div></router-link
    >        -->
    <div class="card">
      <div class="content">
        <router-link class="link" to="/admin/agregar_pregunta">
          <div>AGREGAR PREGUNTAS</div>
        </router-link>
      </div>
    </div>

    <div class="card">
      <div class="content">
        <router-link class="link" to="/admin/agregar_respuesta">
          <div>AGREGAR RESPUESTAS</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
    <style scoped>
@import url(/src\assets\Proyecto\Estilos\CuentaAdmin.css);
</style>


<script>
// import Home from './Home.vue'

export default {
  components: {},
  data() {
    return {
      token: null,
      user: {},
    };
  },

  mounted() {
    // this.$router.push("/user/inicio");

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
    async logout() {
      try {
        const rs = await this.axios.get("/api/logout", {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        localStorage.clear();

        this.$router.push({
          name: "Home",
          params: {
            message: rs.data.message,
          },
        });
      } catch (e) {
        this.$router.push({
          name: "Home",
          params: {
            message: e.response.data.message,
          },
        });
      }
    },
  },
};
</script>
