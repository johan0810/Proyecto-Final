<template>
  <!-- <video
      src="/src\assets\Proyecto\Videos\pexels-rostislav-uzunov-10613973.mp4"
      autoplay="true"
      muted="true"
      loop="true" poster=""
    ></video> -->
  <div class="container-body">
    <div id="TEST">
      <div class="badge">
        <div class="text">
          <h1 class="titulo">PRUEGUNTAS</h1>
        </div>
      </div>
      <!-- <div
      class="container-fluid"
      id="seccion1"
      v-for="(questions, i) in list_questions"
      :key="'pregunta' + i"
      > -->

      <div id="blog">
        <div class="pregunta">
          <h1>{{ cont }}- {{ q.question }}</h1>
          <button id="generate">Generar</button>
        </div>
        <span
          class="text-black font-weight-light efecto e-izquierda d400 titulo2"
          v-for="(ans, i) in q.answers"
          :key="'ans' + i"
        >
          <label class="ss" @click="respuesta(ans)">
            <div type="radio" value="1" name="p1">
              <ul>
                <li>{{ ans.options }}</li>
              </ul>
            </div>
            <!-- <button id="generate">Generar</button> -->
          </label>
        </span>
      </div>

      <div class="footer">
        <div class="botton">
          <button class="btn btn-danger" @click="verificate()">
            FINALIZAR
          </button>
         
        </div>
        <div class="result">
          <span id="resultado"
            ><h1>Acertadas:</h1>
            {{ acertadas }}</span
          >
          <!-- <span id="resultado"
            >N°Preguntas{{ this.list_questions.length }}</span
          >
          <span id="resultado">Contador:{{ this.cont }}</span> -->
        </div>
      </div>
      <!-- <button id="generate">Generar</button> -->

      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="prev()">prev</a></li>
        <li class="page-item"><a class="page-link" @click="next()">Next</a></li>
      </ul>
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
      cont: 1,
      selected_question: null,
      list_questions: [],

      ////
      list_answer: [],

      ///
      edit_questions: {},
      copy_edit_questions: {},
      acertadas: 0,
    };
  },
  //  correctas=[],
  //       opcion_elegida=[],
  //       cantidad_correctas=0,

  mounted() {
    this.index();

    const $generate = document.getElementById("generate"),
      $reset = document.getElementById("reset");

    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    document.addEventListener("click", (e) => {
      if (e.target === $generate) {
        let color = "#";
        for (let i = 0; i < 6; i++) color += hex[randomNumber()];
        document.getElementById("blog").style.background = color;
      }
      if (e.target === $reset) {
        document.body.style.background = "#303134";
      }
    });

    function randomNumber() {
      return Math.floor(Math.random() * hex.length);
    }
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

      console.log(this.list_questions);
    },

    // get_answers(questions) {
    //   return this.list_answer.filter((ans) => ans.questions_id === questions);
    // },

    next() {
      if (this.cont < this.list_questions.length) {
        this.q = this.list_questions[this.cont];
        this.cont++;
      } else {
        this.cont--;
        this.q = this.list_questions[this.cont];
      }
    },
    prev() {
      if (this.cont < 10) {
        this.cont--;
        this.q = this.list_questions[this.cont];
      }
    },

    verificate() {
      if (this.acertadas >= 8) {
        alert("FELICIDADES PUEDE OBTENER TU CERTIFICADO  " + this.acertadas);
        this.$router.push("/certificado");
      } else if (this.acertadas < 3) {
        alert("PERDISTE INTENTA DE NUEVO" + this.acertadas);
        this.$router.push("/prueba/comenzar");
      } else {
        alert("SELECCIONA UNA RESPUESTA!");
      }

      function mostrar() {
        document.getElementById("resultado").style.display = "block";
      }
    },

    respuesta(a) {
      if (this.cont < this.list_questions.length) {
        this.q = this.list_questions[this.cont];
        this.cont++;
      } else alert("terminaste");

      if (a.answer == 1) {
        // alert("BIEN!!!");
        this.acertadas++;
        // console.log(
        // this.acertadas
        // )
      } else {
        // alert("Mucho Arley");
      }

      if (this.acertadas == this.list_questions.length) {
        alert("GANASTE");
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
