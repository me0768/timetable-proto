<template>
  <div class="major-select">
      <div class="centered">
        <div class="group autocomplete">
          <input name="name" type="text" id="major-select" v-on:keyup.enter="transitionToGrade" required="required"/>
          <label for="name">전공이무엇인가요?</label>
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: 'major-select',
  data () {
    return {
      majors : []
    }
  },
  methods: {
    transitionToGrade: function () {
      this.$emit('view', 'grade')
    }
  },

  beforeCreate: function () {
    const baseURI = 'https://jsonplaceholder.typicode.com'
      this.$http.get(`${baseURI}/posts`)
      .then((result) => {
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
  left: 0;
  color: rgba(88, 88, 88, 0.5);
  font: 400 36.6666666667px Roboto;
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
  color: #f06292;
  font-size: 36.6666666667px;
  transition: .3s ease;
}
input:valid ~ label {
  top: 0;
  font: 700 22px Roboto;
  color: rgba(255, 255, 255, 0.5);
}
input:focus {
  outline: none;
}
input:focus ~ label {
  top: 0;
  font: 700 22px Roboto;
  color: #f06292;
}
input:focus ~ .bar:before {
  transform: translateX(-50%);
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #333 inset;
  -webkit-text-fill-color: white !important;
}

.bar {
  background: rgba(88, 88, 88, 0.5);
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
  background: #f06292;
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
