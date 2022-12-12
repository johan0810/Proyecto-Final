<template>
  <div class="containere-body">
    <router-view v-slot="{ Component }">
        <transition name="bonce-in">
          <component :is="Component" />
        </transition>
      </router-view>
  </div>
</template>

<style scoped>

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }


}
</style>
<script>
export default {
    data(){
        return{
            user:{}
        }

        
    },
  mounted() {
    this.$router.push("/prueba/comenzar");

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
   }
};
</script>