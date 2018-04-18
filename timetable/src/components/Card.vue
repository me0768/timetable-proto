<template>
  <div class="card" v-bind:class="{ 'selected' : isSelected }">
    <div id="image">
      <img src="../assets/professor.jpg" alt="professor">
    </div>
    <!--
    <div id="text">
      <h3>{{ subjectName }}</h3>
      <p>{{ professorName }} 교수님</p>
    </div> -->

    <!--과목 이름/교수님 : 클릭하면 모달창open -->
    <div class="modal" id="text">
        <input id="modal__trigger" type="checkbox" />
        <label for="modal__trigger">{{ subject.subjectName }}</label>
        <i class="fa fa-plus" id="add" v-on:click="addAndRemoveItem" aria-hidden="true"></i>
        <p>{{ subject.professor }} 교수님</p>
        <subject-detail></subject-detail>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/

import Detail from './SubjectDetail.vue'
export default {
  name: 'card',
  components: {
    'subject-detail' : Detail
  },
  props: {
    //subjects: {
    //  type:Array
    //},
    subject: {
      type:Object
    }
  },
  data () {
    return {
      isSelected: false
    }
  },
  methods: {
    addAndRemoveItem: function () {
      this.$emit('subject', this.subject.subjectName);
      this.isSelected = !this.isSelected;
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  width: 18vw;
  height: 70px;
  background-color: #b5efe9;
  color: #1995ad;
  border-radius: 6px;
  border: 2px solid transparent;
  margin: 3px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.selected {
  border: 2px solid #1995ad;
}
#image {
  grid-column: 1 / span 1;
}
#text {
  grid-column: 2/ span 3;
}
h3{
  cursor: pointer;
}
p {
  margin: 8px 0;
}
#image > img {
  width: 50px;
  height: 55px;
  border-radius: 50%;
  margin: 10px 10px;
}
#image, #text {
  display: inline-block;
}

#add {
  cursor: pointer;
  position: relative;
  right: -20px;
}

/* fade effect */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fade-transition {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave {
  opacity: 0;
}


/*==================================== 
       Modal Window styles
=====================================*/
html,
body {
  box-sizing: border-box;
  font-size: 100%;
  height: 100%;
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.modal {
  display: inline-block;
  padding: 5px 0;
}

.modal > label {
  border-radius: .2em;
  color: #1995ad;
  cursor: pointer;
  display: inline-block;
  font-family: 'NanumSquareRoundB';
  padding: 0.25em 1.5em;
  transition: all 0.55s;
}

.modal > label:hover {
  font-weight: bold;
}

.modal__overlay {
  background: white;
  width: 40vw;
  height: 50vh;
  bottom: 0;
  left: 30vw;
  position: fixed;
  right: 0;
  text-align: center;
  text-shadow: none;
  top: 25vh;
  border-radius: 10px;
  z-index: 600;
}

.modal__wrap {
  position: relative;
  margin: 0 auto;
  max-width: 500px;
  width: 90%;
}

@media (min-width: 50em) {
  .modal__wrap {
    padding: 1.75em;
  }
}
@media (min-height: 37.5em) {
  .modal__wrap {
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -80%);
            transform: translate(-50%, -80%);
  }
}
.modal__wrap label {
  background: #FFD300;
  border-radius: 50%;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  height: 1.5em;
  line-height: 1.5;
  position: absolute;
  right: .5em;
  top: .5em;
  width: 1.5em;
}

.modal__wrap h2 {
  color: #FFD300;
  margin-bottom: 1em;
  text-transform: uppercase;
}

.modal__wrap p {
  color: #FFD300;
  text-align: justify;
}

.modal input:focus ~ label {
  -webkit-transform: scale(0.97);
          transform: scale(0.97);
}

input {
  position: absolute;
  top: -1000px;
}

.modal__overlay {
  opacity: 0;
  -webkit-transform: scale(0.5);
          transform: scale(0.5);
  transition: all 0.45s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: -100;
}

input:checked ~ .modal__overlay {
  opacity: 0.9;
  -webkit-transform: scale(1);
          transform: scale(1);
  z-index: 8;
}

</style>
