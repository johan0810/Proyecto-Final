<template>
  <div class="container" id="inicio">
    <div class="container-body" id="seccion1">
      <div class="seccion2">
        <label class="titulo">Ingresa una Pregunta</label>

        <input
          type="text"
          placeholder="¿Pregunta?"
          class="form-control my-3"
          v-model="new_question.question"
        />

        <button type="button" class="btn btn-success" @click="store()">
          Crear
        </button>
      </div>
      <div class="seccion1">
        <div class="input-group mb-3">
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title titulo" id="exampleModalLabel">
                    EDITAR
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <input
                    type="text"
                    placeholder="EDITAR"
                    class="form-control"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    v-model="edit_questions.question"
                  />
                  <button
                    type="button"
                    class="btn btn-danger"
                    id="button-addon2"
                    @click="cancel()"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="update()"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <button type="button" class="btn btn-danger" @click="cancel()">
          Cancelar
        </button> -->
      </div>
    </div>
    <div class="main">
      <table class="table">
        <thead>
          <tr class="titulo">
            <th id="name2"></th>
            <th id="document2">PREGUNTAS</th>
            <!-- <th id="name2">CODIGO</th> -->
            <th id="position2">EDITAR</th>
            <th id="icons2">ELIMINAR</th>
            <th id="salary2"></th>
          </tr>
        </thead>

        <tbody>
          <tr class="planta" v-for="(questions, i) in list_questions" :key="i">
            <td id="name">{{ i + 1 }}</td>
            <td id="document" > ¿{{ questions.question }}?</td>
            <!-- <td id="document">{{ questions.id }}</td> -->
            <td id="position">
              <div
                class="editar but"
                data-toggle="modal"
                data-target="#exampleModal"
                @click="edit(questions)"
              ></div>
            </td>

            <td id="icons">
              <div class="eliminar but" @click="destroy(questions.id)"></div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <thead class="list">
        <th class="questions" v-for="(questions, i) in list_questions" :key="i">
          ID: {{ i + 1 }}---{{ questions.id }}---- ¿{{ questions.question }}?
          <button
            class="btn btn-primary"
            type="button"
            @click="edit(questions)" href="#inicio"
          >
            <a href="#seccion1" id="a">editar</a>
          </button>
          <button class="btn btn-danger" @click="destroy()">Eliminar</button>
        </th>

        <th></th>
      </thead> -->
    </div>
  </div>

  <!-- <div class="container">
    <h2>Prueba algo nuevo</h2>

    <div v-for="question in list_questions">
      <a>
        <h4>{{ question.question }}</h4>
      </a>
    </div>
  </div> -->
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\Admin\agregar.css);
</style>

<script>
export default {
  name: "Preguntas",
  components: {},

  data() {
    return {
      list_questions: {},
      new_question: {},
      //
      edit_questions: [],
      copy_edit_questions: {},
      //
      Delete: {},
    };
  },

  mounted() {
    this.index();
  },

  created() {},

  methods: {
    async index() {
      let response = await axios.get("http://127.0.0.1:8000/api/questions");
      this.list_questions = response.data.question;
    },

    async store() {
      await axios.post(
        "http://127.0.0.1:8000/api/questions",
        this.new_question
      );
      (this.new_question = {}), this.index();
      console.log(this.list_questions);
    },

    edit(questions) {
      this.edit_questions = questions;

      Object.assign(this.copy_edit_questions, this.edit_questions);
    },

    async update() {
      let id = this.edit_questions.id;
      await axios.put(
        "http://127.0.0.1:8000/api/questions/" + this.edit_questions.id,
        this.edit_questions
      );
      (this.edit_questions = {}), console.log(this.list_questions);
      this.index();
    },

    cancel() {
      Object.assign(this.edit_questions, this.copy_edit_questions);
      this.edit_questions = {};
    },

    //  DeleteP(questions) {
    //         this.Delete =questions;

    //     },

    async destroy(id) {
      // let id=this.Delete.id;
      await axios.delete("http://127.0.0.1:8000/api/questions/" + id);
      this.index();
    },
  },
};
</script>
