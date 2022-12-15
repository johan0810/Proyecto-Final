<template>
  <!-- <div id="dos">
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
  </div> -->

  <div class="seccion">
    <!-- <router-link class="link" to="/admin/agregar_pregunta">
      <div id="secciones">PREGUNTAS</div>
    </router-link>
    <router-link class="link" to="/admin/agregar_respuesta">
      <div id="secciones">Respuestas</div></router-link
    >        -->
    <!-- <div class="card">
      <div class="content">
        <router-link class="link" to="/admin/agregar_pregunta">
          <div>AGREGAR PREGUNTAS</div>
        </router-link>
      </div>
    </div> -->

    <!-- <div class="card">
      <div class="content">
        <router-link class="link" to="/admin/agregar_respuesta">
          <div>AGREGAR RESPUESTAS</div>
        </router-link>
      </div>
    </div> -->

     <!-- <div class="card">
      <div class="content">
        <router-link target="_blank" class="link" to="/user">
          <div>INICIAR COMO USUARIO</div>
        </router-link>
      </div>
    </div> -->
    <div class="carousel__container">
      <div class="carousel__item">
        <router-link class="link" to="/user">
          <div
            style="background-image: url(/src/assets/Proyecto/Imagenes/gif3.gif); 
            background-repeat: no-repeat;background-size:contain;" class="carousel__image">          
            INICIAR COMO USUARIO
          </div>
        </router-link>
      </div>
      <div class="carousel__item">
        <router-link class="link" to="/admin/agregar_pregunta">
          <div
            style="background-image: url(/src/assets/Proyecto/Imagenes/gif3.gif); 
            background-repeat: no-repeat;background-size:contain;" class="carousel__image">          
            AGREGAR PREGUNTA
          </div>
        </router-link>
      </div>
      <div class="carousel__item">
        <router-link class="link" to="/admin/agregar_respuesta">
          <div
            style="background-image: url(/src/assets/Proyecto/Imagenes/gif3.gif); 
            background-repeat: no-repeat;background-size:contain;" class="carousel__image">          
            AGREGAR RESPUESTAS
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(/src\assets\Proyecto\Estilos\Admin\CuentaAdmin.css);
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
