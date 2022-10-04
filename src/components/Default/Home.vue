<template>
<div class="container">

   <router-link class="link" to="/login">Acceder </router-link>
   <router-view></router-view></div>
   <aside>
   <perfil></perfil>
   </aside>
   
</template>


<style scoped>
@import url(/src\assets\Proyecto\Estilos\inicio.css);
</style>
<script>
// import Home from './Home.vue'


import Perfil from '../User/Perfil.vue';

export default {
  components: {
    // Home,
    Perfil,
  },


    Perfil}
</script>
