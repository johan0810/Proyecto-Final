<template>
  <!-- <router-link class="link" to="/account/profile">Perfil </router-link>
    <router-link class="link" to="/account/edit-profile">Configurar Cuenta </router-link>
    <router-link class="link" to="/account/change-password">Cambiar Contraseña </router-link> -->

  <div class="containere-body">
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
      
    </main>
    
   
  </div>

</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Cuenta.css);
</style>

<script>
// import Home from './Home.vue'
import Perfil from "./Perfil.vue";

export default {
  components: {
    // Home,
    Perfil,
  },

  mounted() {
    this.$router.push("/user/inicio");

    if (localStorage.token) {
      this.token = localStorage.token;
      this.get_user();
    } else {
      this.$router.push({
        name: "Home",
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
