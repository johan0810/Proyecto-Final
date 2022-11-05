<template>
  <div class="container-body">
    <main>
      <div class="contenedor_todo">
        <div class="caja_trasera">
          <div class="caja_trasera-login">
            <h3>¿Ya tienes Cuenta?</h3>
            <p>Inicia sesión para entrar en su página</p>
            <button id="btn_iniciar-sesion">Iniciar Sesión</button>
          </div>
          <div class="caja_trasera-register">
            <h3>¿Aun no tienes una Cuenta?</h3>
            <p>Registrate para que puedas iniciar sesión</p>
            <button id="btn_registrarse">Registrarse</button>
          </div>
        </div>
        <!-- FORMULARIO DE LOGIN Y REGISTRO -->
        <div class="contenedor_login-register">
          <!-- LOGIN -->
          <div class="formulario_login">
            <h2>Iniciar Sesión</h2>
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Correo Electronico"
              v-model="form.email"
            />

            <input
              class="form-control"
              name="password"
              type="password"
              placeholder="Contraseña"
              v-model="form.password"
            />
            <div class="message">
              <span v-if="errors.password">{{ errors.password[0] }}</span>

              <span v-if="message">{{ message }}</span>
            </div>
            <!-- <span v-if="errors.password">{{ errors.password[0] }}</span> -->

            <div>
              <router-link class="link" to="/ForgotPassword"
                >¿Olvidaste Tu contraseña?
              </router-link>
            </div>
            <button class="btn btn-primary" @click="login()">Entrar</button>
          </div>
          <!-- REGISTR  O -->
          <div class="formulario_register">
            <h2>Registrarse</h2>
            <div class="formRegister">
              <div class="seccion1form">
                <input
                  class="form-control"
                  type="name"
                  name="name"
                  v-model="form.name"
                  placeholder="Nombre Usuario"
                />
                <input
                  class="form-control"
                  type="text"
                  name="type dni"
                  v-model="form.type_dni"
                  placeholder="Tipo Documento"
                />
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  v-model="form.password"
                  placeholder="Password"
                />
                <input
                  class="form-control"
                  type="password"
                  name="password_confirmation"
                  v-model="form.password_confirmation"
                  placeholder="Password Confirmation"
                />
              </div>
              <div class="seccion2form">
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  v-model="form.email"
                  placeholder="Correo Electronico"
                />

                <input
                  class="form-control"
                  type="number"
                  name="dni"
                  v-model="form.dni"
                  placeholder="N° Documento"
                />

                <input
                  class="form-control"
                  type="number"
                  name="phone"
                  v-model="form.phone"
                  placeholder="N° Telefono"
                />
              </div>
            </div>

            <div class="message">
              <span v-if="errors.email">{{ errors.password[0] }}</span>
            </div>
            <button
              class="btn btn-primary"
              @click="Register()"
              value="recargar"
            >
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
  <!-- <div class="container-body">
<aside>
   <perfil></perfil>
   </aside>
   <router-view></router-view>
    <div class="containermain">
      <form id="form">
        <div class="inicio">LOGIN</div>
        <div class="email">
          <label for="">Email:</label>
          <input
            class="form-control"
            type="email"
            name="email"
            v-model="form.email"
          />
          <span v-if="errors.email">{{ errors.email[0] }}</span>
        </div>

        <div class="password">
          <label id="pass" for="">Password:</label>
          <input
            class="form-control"
            type="password"
            name="password"
            v-model="form.password"
          />
          <span v-if="errors.password">{{ errors.password[0] }}</span>
          <div></div>
          <router-link class="link" to="/ForgotPassword"
            >¿Olvidaste Tu contraseña?
          </router-link>
        </div>

        <button @click="login()" type="button" id="boton-ingresar" class="">
          Ingresar
        </button>

        <router-link class="link" to="/register"
          >¿No tiene Cuenta?<button type="button">Registrate</button>
        </router-link>

        <p v-if="message" id="final">{{ message }}</p>
      </form>
    </div>
  </div> -->
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Default\Login.css);
</style>

<script>
import Home from "./Home.vue";
import Perfil from "../User/Perfil.vue";

export default {
  components: { Perfil },
  comoponents: {
    Home,
    Perfil,
  },
  data() {
    return {
      name: "Login",
      message: null,
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        type_dni: "",
        dni: "",
        phone: "",
        token: null,
      },
      errors: {},
    };
  },

  mounted() {
    if (this.$route.params.message) this.message = this.$route.params.message;

    /////////////////////////////////////////////
    document
      .getElementById("btn_iniciar-sesion")
      .addEventListener("click", iniciarSesion);
    document
      .getElementById("btn_registrarse")
      .addEventListener("click", register);
    window.addEventListener("resize", anchoPagina);

    //Declaracion de Variables
    var contenedor_login_register = document.querySelector(
      ".contenedor_login-register"
    );
    var formulario_login = document.querySelector(".formulario_login");
    var formulario_register = document.querySelector(".formulario_register");
    var caja_trasera_login = document.querySelector(".caja_trasera-login");
    var caja_trasera_register = document.querySelector(
      ".caja_trasera-register"
    );

    function anchoPagina() {
      if (window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        formulario_login.style.left = "10px"; //
        caja_trasera_register.style.display = "block";
      } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_login.style.display = "none";
        contenedor_login_register.style.left = "0";
      }
    }
    anchoPagina();

    function iniciarSesion() {
      if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px"; //10px
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
      } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
      }
    }

    function register() {
      if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "400px"; //410px

        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
      } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "none";
        caja_trasera_login.style.opacity = "1";
      }
    }
    /////////////////////////////////////////7
  },

  methods: {
    async login() {
      try {
        const rs = await this.axios.post("/api/login", this.form);

        localStorage.token = rs.data.token;
        localStorage.user = JSON.stringify(rs.data.user);

        switch (rs.data.roles) {
          case "Admin":
            this.$router.push({
              name: "Admin",
              // params: {token: rs.data.token},
            });
            break;

          case "Aprendiz":
            this.$router.push({
              name: "User",
            });
        }
      } catch (e) {
        this.errors = {};
        this.message = null;

        if (e.response.data.errors) this.errors = e.response.data.errors;
        else if (e.response.data.message)
          this.message = e.response.data.message;
      }
    },

    async Register() {
      try {
        const rs = await this.axios.post("/api/register", this.form);
        this.$router.push({
          name: "Login",
          params: {
            message: rs.data.message,
          },
        });
        location.reload();

        localStorage.token = rs.data.token;
      } catch (e) {
        this.errors = {};
        this.message = null;

        if (e.response.data.errors) this.errors = e.response.data.errors;
        else if (e.response.data.message)
          this.message = e.response.data.message;
      }
    },
  },
};
</script>
