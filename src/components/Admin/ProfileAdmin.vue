<template>

  <p>Name:{{ user.name }}</p>
  <p>Email:{{ user.email }}</p>
  <p>created_at: {{ user.created_at }}</p>
   <button type="button" @click="logout()">Cerrar Sesion</button>  

    

     
   
  
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Cuenta.css);
</style>

<script>

export default {
  components:{},
  data() {
    return {
      token: null,
      user: {},
    };
  },

  mounted() {
    
    if (localStorage.token) {
      this.token = localStorage.token;
      this.get_user();
    } else {
      this.$router.push({
        name: "Login",
        params: {
          message: "No estas autotizado a entrar",
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
          name: "Login",
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
          name: "Login",
          params: {
            message: e.response.data.message,
          },
        });
       
      }
    },
  },
};
</script>
