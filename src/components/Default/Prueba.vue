<template>
  <div
    class="container-body"
    data-offset="80"
    data-spy="scroll"
    data-target="#navegación"
  >
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="next()">Next</a></li>
      </ul>
    </nav>

    <!-- SECCION 0 -->

    <div class="badge">
      <div class="text">
        <h1
          style="
            color: blue;
            font-family: tipo_letra9;
            font-size: 5rem;
            margin: 0;
          "
        >
          PRUEGUNTAS
        </h1>
      </div>
    </div>
    <!-- <div
      class="container-fluid"
      id="seccion1"
      v-for="(questions, i) in list_questions"
      :key="'pregunta' + i"
    > -->
    <div class="container-fluid" id="seccion1">
      <!-- <div class=""  v-bind:id="'seccion'+i" > -->

      <div id="blog">
        <div class="pregunta">
          <h1>{{ cont }}- {{ q.question }}</h1>
        </div>

        <span
          class="text-black font-weight-light efecto e-izquierda d400 titulo2"
          v-for="(ans, i) in q.answers"
          :key="'ans' + i"
        >
          <label class="ss">
            <input type="radio" value="1" name="p1" @click="respuesta(ans)" />
            {{ ans.options }}
          </label>
        </span>
      </div>
    </div>
    <div class="footer">
      <div class="botton">
        <button class="btn btn-danger">FINALIZAR</button>
      </div>
      <div class="result">
        <h1>Acertadas:</h1>
        <span id="resultado"> </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(/src\assets\Proyecto\Estilos\User\Prueba.css);
</style>

<script>
export default {
  data() {
    return {
      q: {},
      cont: 0,
      selected_question: null,
      list_questions: [],

      ////
      list_answer: [], 

      ///
      edit_questions: {},
      copy_edit_questions: {},
    };
  },
  //  correctas=[],
  //       opcion_elegida=[],
  //       cantidad_correctas=0,

  mounted() {
    this.index();
  },

  created() {},

  methods: {
    async index() {
      let response = await axios.get("http://127.0.0.1:8000/api/test");
      this.list_questions = response.data.question;

      let respons = await axios.post("http://127.0.0.1:8000/api/test/answers", {
        questions: this.list_questions,
      });
      this.list_questions = respons.data.questions;

      //Primera pregunta
      this.q = this.list_questions[0];
      this.cont = 1;

      console.log(this.list_questions);
    },

    // get_answers(questions) {
    //   return this.list_answer.filter((ans) => ans.questions_id === questions);
    // },

    next() {
      if (this.cont < this.list_questions.length) {
        this.q = this.list_questions[this.cont];
        this.cont++;
      } else alert("terminaste");
    },

    respuesta(a) {
      if (a.answer == 1) {
        alert("BIEN!!!");
      } else {
        alert("Mucho Arley");
      }
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
  },
};
</script>
