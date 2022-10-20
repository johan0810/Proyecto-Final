 <template>
  <!--NAV  -->
  <nav>
    <header>
      <div class="encabezado">
        <div id="logo"></div>
      </div>

      <div id="titulo">Recupera Tu Cuenta!</div>

      <div class="aside">
        <div class="buscador"></div>
      </div>

      <router-link to="/user" id="boton-buscar">
        <span class="material-symbols-outlined"> Person </span>
      </router-link>

      <router-link to="/" id="boton-buscar">
        <span class="material-symbols-outlined"> home </span>
        <span class="tooltip">Inicio</span>
      </router-link>

      
    </header>
  </nav>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Navbar.css);
</style>