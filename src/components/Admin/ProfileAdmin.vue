<template>
 <div class="container-body" id="contain1">
    <div class="container" id="contain2">
      <nav id="nav2">
        <div class="foto"></div>
      </nav>
      <div class="profile">
        Name:
        <p>{{ user.name }}</p>
        E-mail:
        <p>{{ user.email }}</p>
        Phone:
        <p>{{ user.phone }}</p>
        Tipo DNI:
        <p>{{ user.type_dni }}</p>
        N° DNI:
        <p>{{ user.dni }}</p>
      </div>

      <!-- <div class="pho">
        <input type="file" id="new-client-input" @change="show_image" />
        <img
          @click="open_browser('new-client-input')"
          :src="users.url"
          class="div"
        />

        <span
          v-if="!users.url && !loading"
          class="material-symbols-outlined"
          @click="open_browser('new-client-input')"
        >
          account_circle
        </span>

        <div
          v-if="loading"
          class="loading"
          @click="open_browser('new-client-input')"
        ></div>
      </div> -->

      <!-- <button type="button" class="btn btn-primary" @click="create">
        Add Client
      </button> -->
    </div>
    <div class="d">
      <!-- <button class="btn btn-primary" type="button" @click="logout()">Cerrar Sesion</button> -->
    </div>
  </div>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\User\Cuenta.css);
</style>

<script>
export default {
  components: {},
  data() {
    return {
      token: null,
      user: {},
    };
  },

  mounted() {
    if (localStorage.token) {
      this.token = localStorage.token;
      this.user = JSON.parse(localStorage.user);

      this.get_user();
    } else {
      this.$router.push({
        name: "Login",
        params: {
          message: "No estas autotizado a entrar",
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
          name: "Login",
          params: {
            message: "no estas autorizado",
          },
        });
      }
    },
    async logout() {
      try {
        const rs = await this.axios.get("/api/logout", {
          headers: { Authorization: `Bearer ${this.token}` },
        });

        localStorage.clear();

        this.$router.push({
          name: "Home",
          params: {
            message: rs.data.message,
          },
        });
      } catch (e) {
        this.$router.push({
          name: "Login",
          params: {
            message: e.response.data.message,
          },
        });
      }
    },
  },
};
</script>
