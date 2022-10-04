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
       
        <li>
          <a href="#">
            <span class="material-symbols-outlined"> grid_view </span>
            <span class="links_name">Dashboard</span>
          </a>
          <span class="tooltip">Dashboard</span>
        </li>
        <li>
          <router-link class="link" to="/login"> <a href="#">
            <span class="material-symbols-outlined"> person </span>
            <span class="links_name">Users</span>
          </a></router-link>
          
          <span class="tooltip">Users</span>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-outlined"> chat </span>
            <span class="links_name">Message</span>
          </a>
          <span class="tooltip">Message</span>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-outlined"> donut_small </span>
            <span class="links_name">Analytics</span>
          </a>
          <span class="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-outlined"> folder_open </span>
            <span class="links_name">File Manager</span>
          </a>
          <span class="tooltip">File Manager</span>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-outlined"> shopping_cart </span>
            <span class="links_name">Order</span>
          </a>
          <span class="tooltip">Order</span>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-outlined"> favorite_border </span>
            <span class="links_name">Saved</span>
          </a>
          <span class="tooltip">Saved</span>
        </li>
        <li>
          <a href="#">
            <span class="material-symbols-outlined"> settings </span>
            <span class="links_name">Setting</span>
          </a>
          <span class="tooltip">Setting</span>
        </li>
        
      </ul>
      <div class="profile_content">
        <div class="profile">
          <div class="profile_details">
            <img src="imagenes/io.jpg" alt="" />
            <div class="name_job">
              <div class="name">Arley Acosta</div>
              <div class="job">Creator</div>
            </div>
          </div>
          <span class="material-symbols-outlined" id="log_out"> login </span>
        </div>
        
      </div>
    </div>
    <div class="home_content">
   
    </div>
  
</template>
<style scoped>
@import url(/src\assets\Proyecto\Estilos\aside.css);
</style>
<script>
export default {
  mounted() {
    // let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    let searchBtn = document.querySelector("#search");
     let logins = document.querySelector("#log_out");
  
     

    // btn.onclick = function () {
    //   sidebar.classList.toggle("active");
    // };

    searchBtn.onclick = function () {
      sidebar.classList.toggle("active");
    };

     logins.onclick = function () {
      sidebar.classList.toggle("active");
    };


  },
};
</script>

