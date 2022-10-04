<template>
   <div class="container">
   
   
   <router-view></router-view>
   </div>   
 
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Cuenta.css);
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