<template>
<div class="container-body">
<div class="container">
   <router-view></router-view>
   </div>   

</div>
   
 
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\CuentaAdmin.css);
</style>

<script>
// import Aside from '../Default/Aside.vue'
// import Perfil from "src\components\User\Perfil.vue";

export default {
  components: {
    // Aside,
    // Perfil,
  },

  mounted() {
    this.$router.push("/admin/inicio")
  },
  methods:{

    async get_user() {
      try {
        console.log(this.token);

        const rs = await this.axios.get("/api/admin", {
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
          name: "Login",
          params: {
            message: rs.data.message,
          },
        });
      } catch (e) {
        this.$router.push({
          name: "Login",
          params: {
            message: e.response.data.message,
          },
        });
       
      }
    },
  }
};
</script>