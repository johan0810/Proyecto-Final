 <template>
  <!--NAV  -->

    <nav id="nav">
  <router-link
        v-if="this.$route.path !== '/user/inicio'"
        class="link"
        to="/user/inicio" id="boton-buscar"
        ><div class="icons3"></div
      ></router-link>
    <div id="logo"></div>
    
    <div class="CapaTitulo"><div id="titulo">Recorrido Virtual Sena</div></div>
    <div class="home">
      <router-link to="/" id="boton-buscar">
        <div class="icons2"></div>
      </router-link>
      
    </div>
    
  </nav>
  <!--  -->
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Navbar.css);
</style>