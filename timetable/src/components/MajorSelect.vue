<template>
  <div class="major-select">
    <app-header v-bind:majorPage="majorPage"></app-header>
    <div class="centered">
        <div class="group autocomplete">
          <input name="name" type="text" id="major-select" v-on:keyup.enter="transitionToGrade" required="required"/>
          <label for="name">전공이 무엇인가요?</label>
          <div class="bar"></div>
        </div>
        <div class="autocomplete">
          {{autoComplete()}}
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
import Header from './Header.vue'
export default {
  name: 'major-select',
  components: {
    'app-header': Header
  },
  data () {
    return {
      majors : [],
      majorPage: false
    }
  },
  methods: {
    transitionToGrade: function () {
      /*전공 입력값 저장하고 Grade페이지로 넘어가기*/
      var major = document.getElementById('major-select').value
      this.$store.commit('updateMajor', major)
      document.location.href = "/#/grade";
    },
    autoComplete: function () {
       return this.$store.state.majorList
    }
  },
  //data받아오기 test 
  // beforeCreate: function () {
  //   const baseURI = 'https://jsonplaceholder.typicode.com'
  //     this.$http.get(`${baseURI}/posts`)
  //     .then((result) => {
  //       console.log(result)
  //     })
  // }
   beforeCreate: function () {
     const baseURI = 'http://timetable.kiworkshop.org'
     this.$http.get(`${baseURI}/api/서울/전공/목록.json`)
       .then((result) => {
          this.$store.commit('setMajorList', result.body)
          console.log(result)
        })
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

.major-select {
  margin-top: 30vh;
}
.centered {
  width: 550px;
  height: 110px;
  margin: 0 auto;
}

.group {
  width: 100%;
  height: 110px;
  overflow: hidden;
  position: relative;
}

/*animation */

label {
  position: absolute;
  top: 36.6666666667px;
  left: 10px;
  color: white;
  font: 400 36.6666666667px 'NanumSquareRoundB';
  cursor: text;
  transition: .25s ease;
  pointer-events: none;
}

input {
  display: block;
  width: 100%;
  padding-top: 60px;
  border: none;
  border-radius: 0;
  color: #199fa7;
  font-size: 36.6666666667px;
  font-family: 'NanumSquareRoundR';
  transition: .3s ease;
  background: #80cbc4;
}
input:valid ~ label {
  top: 0;
  font: 700 22px 'NanumSquareRoundR';
  color: rgba(255, 255, 255, 0.5);
}
input:focus {
  outline: none;
}
input:focus ~ label {
  top: 0;
  font: 700 22px 'NanumSquareRoundR';
  color: #199fa7;
}
input:focus ~ .bar:before {
  transform: translateX(-50%);
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #333 inset;
  -webkit-text-fill-color: white !important;
}

.bar {
  background: white;
  content: '';
  width: 550px;
  height: 3.6666666667px;
  transition: .3s ease;
  position: relative;
}
.bar:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 150%;
  background: #199fa7;
  transform: translateX(-150%);
}

::selection {
  background: rgba(33, 150, 243, 0.3);
}

/*fade effect */
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
</style>
