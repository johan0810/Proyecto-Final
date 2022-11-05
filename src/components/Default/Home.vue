<template>
<div class="container-body">
 <div class="container">
    <!-- <router-link class="link" to="/login">Acceder </router-link> -->

    <div class="card">
      <div class="content">
        <router-link class="link" to="/login">
          <div>Login</div>
        </router-link>
      </div>
    </div>

    <div class="card">
      <div class="content">
        <router-link class="link" to="/Default/Recorrido">
          <div>HACER RECORRIDO</div>
        </router-link>
      </div>
    </div>
    
  </div>
</div>
 
 

  <!-- <router-view></router-view> -->
</template>


<style scoped>
@import url(/src\assets\Proyecto\Estilos\Default\inicio.css);
</style>
<script>
// import Home from './Home.vue'

import Perfil from "../User/Perfil.vue";

export default {
  components: {
    // Home,
    Perfil,
  },

  Perfil,
};
</script>
