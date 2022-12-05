<template>
  <div class="container">
    <div class="usu">
      <h1>USUARIOS</h1>
    </div>

    <div class="al">
      <span class="material-symbols-outlined">search </span>
      <input class="input-group-text" type="text" placeholder="Buscar" />
      <button class="btn btn-danger" id="delete">
        <span class="material-symbols-outlined" @click="delete_all()"
          >delete
        </span>
      </button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">DNI</th>
          <th scope="col">PHONE</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="(users, i) in list_users" :key="i">
         <!-- <button class="btn btn-danger" id="delete">
            <span
              class="material-symbols-outlined"
              @click="deleted(users)"
            >delete</span>
          </button> -->
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ users.name }}</td>
          <td>{{ users.email }}</td>
          <td>{{ users.dni }}</td>
          <td>{{ users.phone }}</td>
          <button class="btn btn-danger" id="delete">
            <span class="material-symbols-outlined" @click="destroy(users.id)"
              >delete
            </span>
          </button>
         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Admin\agregar.css);
</style>

<script>
export default {
  data() {
    return {
      list_users: {},
    };
  },

  mounted() {
    this.index();
  },

  methods: {
    async index() {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/users");
      this.list_users = response.data.users;
      } catch (e) {
        console.log(e)
      }
        
    },

    async destroy(id) {
      // let id=this.Delete.id;
      await axios.delete("http://127.0.0.1:8000/api/users/" + id);
      this.index();
    },

    async delete_all() {
      await axios.get("http://127.0.0.1:8000/api/admin/delete-all"); 
      this.index;
      location.reload();

    },
  },
};
</script>