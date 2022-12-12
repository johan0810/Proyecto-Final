<template>
 <video
      src="/src\assets\Proyecto\Videos\video1.mp4"
      autoplay="true"
      muted="true"
      loop="true" poster=""
    ></video>
  <div class="container-body">
    <div class="text">
      <h1 class="titulo">Click Para Iniciar El Test Rapido</h1>
    </div>

    <router-link to="/prueba/test" class="comenzar" id="comenzar"
      ><h1>EMPEZAR</h1>
    </router-link>
  </div>
</template>

<style scoped>
.container-body {
  display: flex;
  flex-flow: column;
  /* margin-left: 4.8rem; */
  border: 0px solid rgb(255, 115, 0) !important;
  align-items: center;
}

#comenzar {
  position: absolute;
  width: 20rem;
  text-align: center;
  font-family: tipo_letra;
  border-radius: 2rem;
  border: 3px solid black;
  background-color: yellow;
  top: 50vh;
  padding: 0.5rem;
  justify-self: flex-end;
}
#comenzar:hover {
  background-color: green;
  color: yellow;
}

.titulo {
  color: red;
  font-family: tipo_letra9;
  font-size: 5rem;
  margin: 0;
}
video {
  position: fixed;
  z-index: -1;
  min-height: 100%;
  min-width: 100%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>