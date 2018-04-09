<template>
  <div class="center" id="grade">
    <h1>몇학년 과목을 볼까요?</h1>
    <div id="grades" class="grades">
      <button class="button" v-bind:class="{active : isActive1}" v-on:click="addSelected(1)">1</button>
      <button class="button" v-bind:class="{active : isActive2}" v-on:click="addSelected(2)">2</button>
      <button class="button" v-bind:class="{active : isActive3}" v-on:click="addSelected(3)">3</button>
      <button class="button" v-bind:class="{active : isActive4}" v-on:click="addSelected(4)">4</button>
    </div>
    <div id="panels">
      <div id="grade1"></div>
      <div id="grade2"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: 'grade',
  data () {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false
    }
  },
  methods: {
    addSelected: function (number) {
      switch(number) {
        case 1:
          this.isActive1 = !this.isActive1;
          break
        case 2:
          this.isActive2 = !this.isActive2
          break
        case 3:
          this.isActive3 = !this.isActive3
          break
        case 4:
          this.isActive4 = !this.isActive4
          break
      }
      this.addPanel(number)
    },
    addPanel: function (grade) {
      // move previous items to top 
      var container = document.getElementById('grade')
      container.classList.remove("center")
      var grades = document.getElementById('grades')
      grades.classList.remove("grades")
      // add panel
      var grade1 = document.getElementById('grade1')
      grade1.style.width = '400px'
      grade1.style.height = '700px'
      grade1.style.backgroundColor = 'lightgray'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  margin-top: 30vh;
}
.grades {
  margin-top: 10vh;
}

.button {
  background-color: #2A363B;
  color: white;
  width: 80px;
  height: 80px;
  margin: 0 60px;
  border: none;
  font-size: 2rem;
  cursor: pointer;
} 
.active {
  background-color: #E84A5F;
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
</style>
