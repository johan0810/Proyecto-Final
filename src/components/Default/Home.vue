<template>
 <router-link to="/user/inicio" class="salir">
      </router-link>
  <div class="container-body">
  
    <div class="titulo"><h1>RECORRIDO VIRTUAL DEL SENA</h1></div>
    <div class="container-main">
      <!-- <img src="src\assets\Proyecto\Imagenes\IMG_20221112_104246_00_004.jpg"> -->
      <!-- <a-scene >
 <a-assets>
    <img id="sky" src="src\assets\Proyecto\Imagenes\IMG_20221112_104246_00_004.jpg">
  </a-assets>
<a-ski src="#ski" id="scene"></a-ski>

</a-scene> -->
      <!-- <video
      src="/src\assets\Proyecto\Videos\video.mp4"
      autoplay="true"
      muted="true"
      loop="true" poster=""
    ></video> -->
      <!-- <router-link class="link" to="/login">Acceder </router-link> -->

      <img src="src/assets/Proyecto/Logo/logoSena.png" alt="" id="imglogo" />
    </div>

    <div class="container-footer">
      <div class="opciones">
        <router-link to="/login" class="card">
          <router-link class="link" to="/login">
            <div>INICIAR SESIÓN</div>
          </router-link>
          <div class="content" id="card1"></div>
        </router-link>
        <router-link to="/Recorrido" class="card">
          <router-link class="link" to="/Recorrido">
            <div>HACER RECORRIDO</div>
          </router-link>
          <div class="content" id="card2"></div>
        </router-link>
      </div>
      <div class="redes">
      <a class="red red3" target="_blank" href="http://www.senasofiaplus.edu.co/"></a>
        <a class="red red2" target="_blank" href="https://www.facebook.com/SENA/"></a>
        <a class="red red1" target="_blank" href="https://www.facebook.com/SENA/"></a>
      
    </div>
    </div>
    
  </div>

  <!-- <router-view></router-view> -->
</template>


<style scoped>
/*@import url(/src\assets\Proyecto\Estilos\Default\inicio.css);*/

/* .container-body{

  background-image: url(/src\assets\Proyecto\Imagenes\imagen1.jpg);
  
} */


.salir{
  display: flex;
  width: 3rem;
  height: 3rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(/src\assets\Proyecto\iconos\45.png);
  border: 0px solid red;
  margin: 1rem;
}


.salir:hover{
  cursor: pointer;
}
.redes {
  display: flex;
  position: absolute;
  bottom: 0%;
  right: 0%;
  flex-flow: row;
  border: 0px solid red;
  width: 15rem;
  height: 3rem;
  margin-left: 0rem;
}
.red1 {
  width: 5rem;
  height: 3rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(/src\assets\Proyecto\iconos\red1.png);
}
.red2 {
  width: 5rem;
  height: 3rem;
   background-size: contain;
  background-repeat: no-repeat;
  background-image: url(/src\assets\Proyecto\iconos\red2.png);
}
.red3 {
  width: 20rem;
  height: 7rem;
   background-size: contain;
  background-repeat: no-repeat;
  background-image: url(/src\assets\Proyecto\iconos\red3.png);
}
.red{
  margin: .5rem;
  }

  .red:hover{
    transform: scale(1.2);
  }

.container-body {
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex-wrap: wrap;
  scroll-behavior: smooth;
  border: 00px solid rebeccapurple;
  width: 100%;
  height: 100vh;
  /* border: 10px solid black; */
}

.container-main {
  border: 0px solid yellow;
  min-width: 100%;
  min-height: 50%;
  display: flex;
  background-image: url(/src\assets\Proyecto\Imagenes\IMG.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: right;
  padding-right: 5rem;
  padding-top: 2rem;
}

.container-footer {
  display: flex;
  flex-flow: row;
  border: 0px solid blue;
  min-height: 50%;
  min-width: 100%;
  justify-items: center;
  background-color: #ECF0F1;
}

#imglogo {
  display: flex;
  width: 6rem;
  height: 6rem;
  border: 0px solid black;
}
.opciones {
  border: 0px solid rebeccapurple;
  display: flex;
  margin: 3rem;
  width: 100%;
  justify-content: center;
  /* height: 100%; */
  overflow: hidden;
}

.titulo {
  width: 50%;
  height: 3rem;
  border-radius: 2rem;
  position: absolute;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-self: center;
  justify-self: center;
  transform: translateY(-2rem);
  background: #6ed3d0c1;
  font-family: tipo_letra3;
  text-align: center;
  color: #1d1b31;
  transform: translateY(0.1rem);
}

.titulo:hover {
  color: orangered;
  border: 3px solid #025159;
}

.card {
  display: flex;
  flex-flow: column;
  width: 35%;
  height: 100%;
  border: 2px solid white;
  text-align: center;

  justify-content: center;
  background-size: contain;
  /* box-shadow: 3px 5px 5px black; */
  overflow: hidden;
  /* margin-top: 1rem; */
}

.content {
  /* border: 2px solid yellow; */
  background-size: cover;
  height: 100%;
  background-repeat: no-repeat;
  /* transition: 0.5s; */
  filter: brightness(100%);
}
.content:hover {
  transform: scale(1.2);
  filter: brightness(49%);
  -webkit-transition: all 300ms ease-in;
  -moz-transition: all 300ms ease-in;
  -ms-transition: all 300ms ease-in;
  -o-transition: all 300ms ease-in;
  transition: all 300ms ease-in;
  /* transition: 0.5s; */
}
.link:hover {
  color: #025159;
  background: white;
  border-radius: 2rem;
  padding: 0.5rem;
}

#card1 {
  background-image: url(/src\assets\Proyecto\Imagenes\img6.png);
}

#card2 {
  background-image: url(/src\assets\Proyecto\Imagenes\img5.png);
}

.link {
  display: flex;
  border: 0px solid red;
  text-decoration: none;
  color: white;
  font-family: tipo_letra;
  font-size: 2rem;
  text-align: center;
  justify-items: center;
  justify-content: center;
  scroll-behavior: smooth;
  position: absolute;
  z-index: 1;
  left: 10%;
}

/* .content h2, a{
    color:rgb(255, 255, 255, .8);
  }  */

/* .card:hover .content {
  transform: scale(1.2);
  scroll-behavior: smooth;

} */
#scene {
  border: 10px solid red;
  width: 100vw;
  height: 50vh;
}
</style>
<!-- <script>
import Home from './Home.vue'

import Perfil from "../User/Perfil.vue";

export default {
  components: {
    Home,
    Perfil,
  },

  Perfil,
};
</script> -->
