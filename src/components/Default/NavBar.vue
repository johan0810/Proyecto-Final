 <template>

  <!--NAV  -->
  <nav id="nav">
    <div id="logo"></div> 
    <div class="CapaTitulo"><div id="titulo">Recorrido Virtual Sena</div></div>
    <div class="home">
      <router-link to="/" id="boton-buscar">
        <span class="material-symbols-outlined"> home </span>
      </router-link>
      <router-link to="/user" id="boton-buscar">
        <span class="material-symbols-outlined"> Person </span>
      </router-link>
    </div>
    <div id="dos"></div>
  </nav>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Navbar.css);
</style>