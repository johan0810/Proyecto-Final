/////////////DEFAULT//////////////
import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/Default/Login.vue";
import Register from "./components/Default/Register.vue";
import Home from "./components/Default/Home.vue";
import NavBar from "./components/Default/NavBar.vue";
import Recorrido from "./components/Default/Recorrido.vue";
import Prueba from "./components/Default/Prueba.vue";


import Aside from "./components/Default/Aside.vue";
import AsideComun from "./components/Default/AsideComun.vue";

// import EditProfile from "./components/EditProfile.vue";
// import Perfil from "./components/User/Perfil.vue";

/////////////USUARIO//////////////
import User from "./components/User/User.vue";
import Profile from "./components/User/Profile.vue";
import Inicio from "./components/User/Inicio.vue";
import ForgotPassword from "./components/User/ForgotPassword.vue";
import ResetPassword from "./components/User/ResetPassword.vue";
import AsideUser from "./components/User/AsideUser.vue";

/////////////ADMINISTRADOR//////////////
import Admin from "./components/Admin/Admin.vue";
import ProfileAdmin from "./components/Admin/ProfileAdmin.vue";
import AgregarPregunta from "./components/Admin/AgregarPregunta.vue";
import AgregarRespuesta from "./components/Admin/AgregarRespuesta.vue";
import NavBarAdmin from "./components/Admin/NavBarAdmin.vue";
import AsideAdmin from "./components/Admin/AsideAdmin.vue"; 
import InicioAdmin from "./components/Admin/InicioAdmin.vue";



const routes = [
  /////////////DEFAULT//////////////
  {
    path: "/",
    name: "Home",
    components: {
      NavBar: NavBar,
      default: Home,
    },
  },

  {
    path: "/login",
    name: "Login",
    components: {
      default: Login,
      NavBar: NavBar,
    },
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/ForgotPassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },

  {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPassword,
  },
  /////////////RECORRIDO//////////////

  {
    path: "/Recorrido",
    name: "Recorrido",
    components: {
      default: Recorrido,
      NavBar: NavBar,
    },
  },


  /////////////USUARIO//////////////
  {
    path: "/user",
    name: "User",
    components: {
      default: User,
      NavBar: NavBar,
      Aside: AsideUser,
    },
    children: [
      {
        path: "profile",
        component: Profile,
      },
      {
        path: "inicio",
        component: Inicio,
      },
      {
        path: "prueba",
        component: Prueba,
      },
      
    ],
  },
  /////////////ADMINISTRADOR//////////////
  {
    path: "/admin",
    name: Admin,
    components: {
      default: Admin,
      NavBar: NavBarAdmin,
      Aside: AsideAdmin,
    },
    children: [
      {
        path: "profileAdmin",
        component: ProfileAdmin,
      },

      {
        path: "agregar_pregunta",
        component: AgregarPregunta,
      },
      {
        path: "agregar_respuesta",
        component: AgregarRespuesta,
      },
      {
        path: "inicio",
        component: InicioAdmin,
      },
    ],
  },

  // {
  //   path: "/aside",
  //   name: "Aside",
  //   component: Aside,
  // },

  // {
  //   path: "/navbar",
  //   name: "Navbar",
  //   component: NavBar,
  // },

  // {
  //     path: "/agregar_pregunta",
  //     name:"AgregarPregunta",
  //     component:AgregarPregunta,
  // },

  // {
  //     path: "/agregar_respuesta",
  //     name:"AgregarRespuesta",
  //     component:AgregarRespuesta,
  // },
];

const _router = createRouter({
  history: createWebHistory(),
  routes,
});

export default _router;
