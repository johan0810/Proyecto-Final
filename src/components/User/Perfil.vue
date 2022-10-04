<template>


  <router-link class="link" to="/user/profile/"
    ><div class="botones">
      <a class="material-symbols-outlined" id="boton-buscar"> person</a>
    </div>
  </router-link>
  <router-link class="link" to="/user/change_password"
    ><div class="botones">
      <a class="material-symbols-outlined" id="boton-buscar"> menu</a>
    </div></router-link
  >
  <router-link class="link" to="/user/"
    ><div class="botones">
      <a class="material-symbols-outlined" id="boton-buscar"> work</a>
    </div></router-link
  >
  <router-link class="link" to="/user"><div class="botones">
      <a class="material-symbols-outlined" id="boton-buscar">?</a>
    </div></router-link>
</template>

<style scoped>
.link {
  text-decoration: none;
  color: black;
}

#boton-buscar {
  font-size: 2rem;
  color: rgb(172, 49, 49);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin: 3px;
  text-decoration: none;
  justify-content: center;
  text-align: center;
  align-items: flex-end;
  border: 0px solid red;
}
</style>

