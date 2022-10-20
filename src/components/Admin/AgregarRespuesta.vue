<template>
  <div class="container">
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <input
              type="text"
              placeholder="Respuestas"
              class="form-control my-3"
              v-model="new_answers.options"
            />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-success" @click="store()">
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
    <thead class="list">
      <th
        class="questions"
        v-for="(questions, i) in list_questions"
        :key="'pregunta' + i"
      >
        ID: {{ i + 1 }}--- ¿{{ questions.question }}?
        <div id="seleccion">
          <button
            type="button"
            class="btn btn-success"
            @click="edit(questions)"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Agregar Respuesta
          </button>

          <div class="form-check form-switch">
            <!-- <label class="form-check-label" for="flexSwitchCheckDefault" v-for="ans in list_answer" :key="ans">{{ans.options}}</label> -->

            <div v-for="(ans, i) in get_answers(questions.id)" :key="'ans' + i">
              {{ ans.options }}

              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                name="checkbox"
                value="0"
                id="flexSwitchCheckDefault"
                @click="edit(ans)"
              />
            </div>
          </div>
        </div>
      </th>
    </thead>
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
@import url(/src\assets\Proyecto\Estilos\agregar.css);
</style>
>
<script>
export default {
  name: "Preguntas",
  components: {},

  data() {
    return {
      selected_question: null,
      list_questions: [],
      new_question: {},
      Delete: {},
      ////
      list_answer: [],
      new_answers: {
        questions_id: null,
      },
      ///
      edit_questions: {},
      copy_edit_questions: {},
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

      let respons = await axios.get("http://127.0.0.1:8000/api/answers");
      this.list_answer = respons.data;
    },

    get_answers(questions) {
      return this.list_answer.filter((ans) => ans.questions_id === questions);
    },

    async store() {
      this.new_answers.questions_id = this.selected_question;
      console.log(this.new_answers);
      await axios.post("http://127.0.0.1:8000/api/answers", this.new_answers);
      (this.new_answers = {}), this.index();
      //console.log(this.list_answer);
    },

    edit(questions) {
      this.selected_question = questions.id;
      this.edit_questions = questions;

      Object.assign(this.copy_edit_questions, this.edit_questions);
    },

    async update() {
      let id = this.edit_questions.id;
      await axios.put(
        "http://127.0.0.1:8000/api/questions/" + this.edit_questions.id,
        this.edit_questions
      );

      this.index();
    },

    FalseTrue() {},

    async destroy(id) {
      // let id=this.Delete.id;
      await axios.delete("http://127.0.0.1:8000/api/questions/" + id);
      this.index();
    },
  },
};
</script>
