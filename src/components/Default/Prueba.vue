<template>
  <div class="container-body" data-offset="80" data-spy="scroll" data-target="#navegación">
    <!-- SECCION 0 -->

    
    <div 
      class="container-fluid"
     id="seccion1"
      v-for="(questions, i) in list_questions"
      :key="'pregunta' + i"
    >
    <!-- <div class=""  v-bind:id="'seccion'+i" > -->
    
    
    
      <div id="blog">
        <h4>
          <span
            class="text-black text-uppercase efecto e-derecha d100"
            id="titulo1"
          >
           <div class="pregunta">
           <h1> {{ i + 1 }}- ¿{{ questions.question }}?</h1>
           </div> 
          </span>
        </h4>

        <span
          class="text-black font-weight-light efecto e-izquierda d400 titulo2" v-for="(ans, i) in get_answers(questions.id)" :key="'ans' + i"
        >
         
          <label class="form-check-label" for="">
          <ul>
          <li>
          <div class="div">
          {{ ans.options }}
          </div>
          
          </li>
          
          </ul>
           
          </label>
        </span>
       
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
      selected_question: null,
      list_questions: [],
     

      ////
      list_answer: [],
      
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
  },
};
</script>