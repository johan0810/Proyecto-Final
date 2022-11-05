<template>
  <!-- <router-link class="link" to="/login">Acceder </router-link>
    <router-link class="link" to="/register">Registrate </router-link> -->
  <!-- <router-link class="link" to="/ForgotPassword">Resetear </router-link> -->
  <!-- <router-link  v-if="this.$route.path =='/ForgotPassword'" class="link" to="/account">Recuperar Contraseña</router-link> -->

  <!-- <router-view name="NavBar"> </router-view> -->
  <!-- <router-view name="Aside"> </router-view>  -->

  <router-view name="NavBar"> </router-view>
  <router-view name="Aside"> </router-view>

  <router-view v-slot="{ Component }">
    <transition name="bounce" >
      <component :is="Component" />
    </transition>
  </router-view>

   <!-- <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view> -->
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Default\Layout.css);
</style>

<script>
import Home from "./components/Default/Home.vue";
import Login from "./components/Default/Login.vue";
import Register from "./components/Default/Register.vue";
export default {
  name: "App",
  components: {
    Home,
    Login,
    Register,
  },
};
</script>
