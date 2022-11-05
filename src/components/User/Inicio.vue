<template>
  <div class="container-body">
      <NavBarUser></NavBarUser>

    <div class="containerr" id="container">

      <div class="seccion">
        <div class="seccion1">
          <div class="card1">
            <div class="content1">
              <router-link class="link" to="/user/profile">
                <div>CONFIGURACION DE CUENTA</div>
              </router-link>
            </div>
          </div>

          <div class="card2">
            <div class="content2">
              <router-link class="link" to="/user/documentacion">
                <div>DOCUMENTACION</div>
              </router-link>
            </div>
          </div>

          <div class="card3">
            <div class="content3">
              <router-link class="link" to="/user/certificado">
                <div>CERTIFICADO</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="seccion2">
          <div class="card4">
            <div class="content4">
              <router-link class="link" to="/user/prueba">
                <div>HACER PRUEBA</div>
              </router-link>
            </div>
          </div>

          <div class="card5">
            <div class="content5">
              <router-link class="link" to="/recorrido">
                <div>HACER RECORRIDO</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="dos">
      <div class="cerrar" @click="logout()"></div>
      <div class="icons1"></div>
      <div class="aprendiz" v-if="user.roles_id == 2">
        <h2>Aprendiz</h2>
      </div>

      <div class="aprendiz" v-else><h2>Administrador</h2></div>
      <div class="icons2"></div>
      <div class="usuario">
        <h2>{{ user.name }}</h2>
      </div>
    </div>
  </div>
</template>
    <style scoped>
@import url(/src\assets\Proyecto\Estilos\User\Cuenta.css);
</style>


<script>
import NavBarUser from "./NavBarUser.vue";

export default {
  components: {
    NavBarUser,
  },
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

