<template>
  <div class="sidebar">
    <div class="logo_content">
      <div class="logo">
        <span class="material-symbols-outlined">
          transfer_within_a_station
        </span>
        <div class="logo_name">Virtual Tour</div>
      </div>
      <!-- <span class="material-symbols-outlined" id="btn"> menu </span> -->
    </div>
    <ul class="nav_list">
      <!-- <li>
          <span class="" id="search">
            <a class="material-symbols-outlined" id="search"> search </a>
          </span>
          <input type="text" placeholder="Search..." />
          <span class="tooltip">Search</span>
        </li> -->
      <li>
        <router-link class="link" to="/user/inicio">
          <a href="#">
            <span class="material-symbols-outlined"> undo</span>
            <span class="links_name">inicio</span>
          </a>
        </router-link>

        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <router-link class="link" to="/user/profile">
          <a href="#">
            <span class="material-symbols-outlined"> person </span>
            <span class="links_name">Users</span>
          </a>
        </router-link>

        <span class="tooltip">Perfil</span>
      </li>
      <li>
        <a href="#">
          <span class="material-symbols-outlined"> chat </span>
          <span class="links_name">Message</span>
        </a>
        <span class="tooltip">Message</span>
      </li>
      <!-- <li>
          <a href="#">
            <span class="material-symbols-outlined"> donut_small </span>
            <span class="links_name">Analytics</span>
          </a>
          <span class="tooltip">Analytics</span>
        </li> -->
      <li>
        <router-link class="link" to="/user/Documentacion">
          <a href="#">
            <span class="material-symbols-outlined"> folder_open </span>
            <span class="links_name">Documetos Sena</span>
          </a>
        </router-link>
        <span class="tooltip">Documentos</span>
      </li>
      <li>
        <router-link class="link" to="/user/Setting/">
        <a href="#">
          <span class="material-symbols-outlined"> settings </span>
          <span class="links_name">Setting</span>
        </a>
        </router-link>
        <span class="tooltip">Setting</span>
      </li>
    </ul>
    <div class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <img src="imagenes/io.jpg" alt="" />
          <div class="name_job">
            <div class="name">{{ user.name }}</div>
            <div class="job">Creator</div>
          </div>
        </div>
        <span class="material-symbols-outlined" id="log_out" >
          login
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(/src\assets\Proyecto\Estilos\Default\aside.css);
</style>
<script>
export default {
  data() {
    return {
      token: null,
      user: {},
    };
  },

  mounted() {
    // let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    // let searchBtn = document.querySelector("#search");
    let logins = document.querySelector("#log_out");

    // btn.onclick = function () {
    //   sidebar.classList.toggle("active");
    // };

    // searchBtn.onclick = function () {
    //   sidebar.classList.toggle("active");
    // };

    logins.onclick = function () {
      sidebar.classList.toggle("active");
    };

    this.$router.push("/user/inicio");

    // if (localStorage.token) {
    //   this.token = localStorage.token;
    //   this.user = JSON.parse(localStorage.user);

    //   this.get_user();
    // } else {
    //   this.$router.push({
    //     name: "Home",
    //     params: {
    //       message: "¡Inicia sesión nuevamente!",
    //     },
    //   });
    // }

  
  },
  methods: {
    // async get_user() {
    //   try {
    //     console.log(this.token);

    //     const rs = await this.axios.get('/api/user', {
    //       headers: { Authorization: `Bearer ${this.token}` },
    //     });
    //     this.user = rs.data.user;
    //   } catch (e) {
    //     this.$router.push({
    //       name: "Home",
    //       params: {
    //         message: "no estas autorizado",
    //       },
    //     });
    //   }
    // },


    // async logout() {
    //   try {
    //     const rs = await this.axios.get("/api/logout", {
    //       headers: { Authorization: `Bearer ${this.token}` },
    //     });

    //     localStorage.clear();

    //     this.$router.push({
    //       name: "Home",
    //       params: {
    //         message: rs.data.message,
    //       },
    //     });
    //   } catch (e) {
    //     this.$router.push({
    //       name: "Home",
    //       params: {
    //         message: e.response.data.message,
    //       },
    //     });
    //   }
    // },
  },
};
</script>

