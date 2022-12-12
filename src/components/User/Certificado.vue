<template>
  <div class="container-body">
    <div class="certificado">
      <div class="logo"></div>
      <div class="certificado-img"></div>
      <div class="titulo">
        <h1>Certificado</h1>
      </div>
      <div class="subtitulo">
        <h3>EL SENA LE OTORGA LA CERTIFICACIÓN AL APRENDIZ :</h3>
      </div>
      <div class="nombre">
        <h1>{{user.name}}</h1>
      </div>
      <hr />
      <div class="motivo">
        <h5>
          Por completar el recorrido virtual de las instalaciones del
          <br />
          Centro Tecnologico De La Amazonia y acertar correctamente el test de
          conocimiento
        </h5>
      </div>
      <div type="button" value="Imprimir" class="imprimir" @click="win()"></div>

      <hr id="firma1" />
      <div class="firma"></div>
      <hr id="firma2" />

      <div class="instructor1">
        <div class="encargado1">
          <h5>MIGUEL MARLES</h5>
        </div>
      </div>
      <div class="instructor2">
        <div class="encargado2">
          <h5>DANNY LOPEZ SEGURA</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\user\certificado.css);

/* @font-face{
    font-family: titulo;
    src: url("TitanOne-Regular.ttf")
}
@font-face{
    font-family: name;
    src: url("Rochester-Regular.ttf")
} */

.imprimir {
  position: absolute;
  border: 0px solid red;
  bottom: 0%;
  background-image: url(/src/assets/Proyecto/iconos/29.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 6%;
  height: 15%;
}
.container-body {
  /* width: 1200px;
    height: 900px; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  /* flex-wrap: wrap; */
}

hr {
  /* border: 5px solid red; */
  display: flex;
  position: absolute;
  top: 45%;
  width: 50%;
}
#firma1 {
  top: 80%;
  width: 10%;
  left: 25%;
}
#firma2 {
  top: 80%;
  width: 10%;

  right: 25%;
}
.firma {
  top: 75%;
  left: 27%;
  width: 10%;
  height: 6%;
  display: flex;
  position: absolute;
  border: 0px solid blue;
  background-image: url(/src\assets\Proyecto\Logo\firma.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  border:0px solid rebeccapurple;

}

.certificado-img {
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  /* border: 1px solid red; */
  background-image: url(/src\assets\Proyecto\Logo\Diploma.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: 50%; */
  border: 0px solid blue;
}

.logo {
  top: 32%;
  width: 30%;
  height: 40%;
  display: flex;
  position: absolute;
  opacity: 0.2;
  filter: alpha(opacity=40);
  background-image: url(/src\assets\Proyecto\Logo\naranja.png);
  border: 0px solid blue;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;

  /* For IE8 and earlier */
}

.certificado {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid rgb(43, 255, 0);

  /* width:50%;
    height: 50%; */
  /* width: 1200px;
    height: 900px; */
  /* margin-left: 30%; */
  /* background-image: url("/certificado1.jpg    ");
    background-size: cover; */
}

.titulo {
  display: flex;
  position: absolute;
  top: 9%;

  font-family: titulo;
}
.titulo h1 {
  font-size: 5rem;
}
.subtitulo {
  display: flex;
  position: absolute;
  top: 25%;
  text-transform: uppercase;
}
.nombre h1 {
  font-size: 5rem;
}
.nombre {
  display: flex;
  position: absolute;
  top: 35%;
  font-family: name;

  border: 0px solid red;
}

.motivo {
  display: flex;
  position: absolute;
  top: 48%;
  border: 0px solid red;
  text-align: center;
  text-transform: uppercase;
}

.encargado1 {
  display: flex;
  position: absolute;
  top: 82%;
  width: 10%;
  height: 10px;
  left: 26%;
}
.encargado2 {
  display: flex;
  position: absolute;
  top: 82%;
  width: 10%;
  height: 10px;
  right: 23%;
}

img {
  border: 0px solid blue;
}

@media print {
  .imprimir {
    display: none !important;
  }
}
</style>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },

  mounted() {
    // this.$router.push("/user/inicio");

    if (localStorage.token) {
      this.token = localStorage.token;
      this.user = JSON.parse(localStorage.user);

      this.get_user();
    } else {
      this.$router.push({
        name: "Login",
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

    win() {
      window.print();
    },
  },
};
</script>
