<template>
  <div v-on:mouseup="modalClose">
    <app-header v-bind:majorPage="majorPage"></app-header>
    <div id="grade" v-bind:style="{ 'margin-top' : marginTop }">
      <h1 id="question" v-if="question">몇학년 과목을 볼까요?</h1>
      <div id="grades" class="grades">
        <button class="button" v-bind:class="{active : isActive1}" v-on:click="toggleSelected(1)">1</button>
        <button class="button" v-bind:class="{active : isActive2}" v-on:click="toggleSelected(2)">2</button>
        <button class="button" v-bind:class="{active : isActive3}" v-on:click="toggleSelected(3)">3</button>
        <button class="button" v-bind:class="{active : isActive4}" v-on:click="toggleSelected(4)">4</button>
      </div>
      <div id="panels">
        <div class="panel1" v-if="isActive1">
          <ul>
            <li v-for="lecture in lectures"><card v-bind:lecture="lecture" v-on:lecture="addAndRemoveItem($event)"></card></li>
          </ul>
          <!-- <card v-bind:subjects="subjects" v-on:subjects="addToHeader($event)"></card>
          <card v-bind:subjects="subjects" v-on:subjects="addToHeader($event)"></card> -->
        </div>
        <div class="panel2" v-if="isActive2">컴포넌트2</div>
        <div class="panel3" v-if="isActive3">컴포넌트3</div>
        <div class="panel4" v-if="isActive4">컴포넌트4</div>
      </div>
    </div>
    <transition name="list">
      <app-footer v-if="appFooter" v-bind:userLectures="userLectures" v-on:subject="addAndRemoveItem($event)"></app-footer>
    </transition>
    </div>
  </template>

  <script>
/* eslint-disable*/
import Header from "./Header.vue";
import Card from "./Card.vue";
import Footer from "./Footer.vue";
import testdata from "../assets/2018-04-08/전공/정책학과/정책학과 1학년.json";

export default {
  name: "grade",
  components: {
    "app-header": Header,
    card: Card,
    "app-footer": Footer
  },
  data() {
    return {
      majorPage: true,
      isActive1: false,
      testdata,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      appFooter: false,
      question: true,
      marginTop: "25vh"
      //subjects: [
      //  {subjectName: '논리적사고', professor: '최원배', grade: '1', department: '정책학과'},
      //  {subjectName: '비판적사고', professor: '최원배', grade: '1', department: '정책학과'}
      //],
    };
  },
  computed: {
    lectures() { 
      // set에 담아 중복된 과목을 없애기
      const set = new Set()
      const lectures = this.$store.state.lectures
      for(let i in lectures){
        set.add(lectures[i].gwamokNm)
      }
      const subjectArr = Array.from(set)
      // 과목-강좌 자료구조에 담기
      const subjectLecture = new Array()
      for(let i in subjectArr){
        const lectureArr = []
        for(let j in lectures){
          if(subjectArr[i] == lectures[j].gwamokNm){
            lectureArr.push(lectures[j])
          }
        }
        const obj = new Object()
        obj[subjectArr[i]] = lectureArr
        subjectLecture.push(obj)
      }
      console.log(Object.keys(subjectLecture[0])[0])//사회윤리사상사
      console.log(subjectLecture[0]['사회윤리사상사'][0]['banNo'])
      console.log("^^^^^")
      return subjectLecture;
    },
    userLectures() {
      return this.$store.state.userLectures;
    }
  },
  methods: {
    addAndRemoveItem: function(subject) {
      this.appFooter = true;
      for (var i = 0; i < this.userLectures.length; i++) {
        if (this.userLectures[i] === subject) {
          this.userLectures.pop(subject);
          if (this.userLectures.length == 0) {
            this.appFooter = false;
          }
          return;
        }
      }
      this.userLectures.push(subject);
    },
    toggleSelected: function(number) {
      //console.log(testdata);
      switch (number) {
        case 1:
          this.isActive1 = !this.isActive1;
          break;
        case 2:
          this.isActive2 = !this.isActive2;
          break;
        case 3:
          this.isActive3 = !this.isActive3;
          break;
        case 4:
          this.isActive4 = !this.isActive4;
          break;
      }
      this.moveToTop();
      if (
        this.isActive1 == false &&
        this.isActive4 == false &&
        this.isActive3 == false &&
        this.isActive2 == false
      ) {
        this.moveToDown();
      }
    },
    moveToTop: function() {
      this.marginTop = 0;
      this.question = false;
    },
    moveToDown: function() {
      this.marginTop = "25vh";
      this.question = true;
    },
    modalClose: function(e) {
      var checkbox = document.getElementById("modal__trigger");
      if (checkbox.checked == true) {
        var modal = document.getElementById("modal_dialog");
        console.log(modal);
        console.log(e.currentTarget);
        if (e.target !== modal) checkbox.checked = false;
      }
    }
  }
};
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
#question {
  font-size: 2rem;
}

.grades {
  margin-top: 5vh;
}
#grade {
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: margin-top 0.4s ease;
  height: 86vh;
}
ul {
  padding: 0 0;
}
li {
  list-style: none;
}
.button {
  background-color: #48a9a0;
  color: white;
  width: 80px;
  height: 80px;
  margin: 0 120px;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 10px;
}
.button:hover {
  background-color: #6dbbb4;
}
.active,
.active:hover {
  background-color: #ff8f9e;
}

#panels {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(300px, auto);
  grid-column-gap: 10px;
  width: 80vw;
  height: 65vh;
  margin: 0 auto;
  margin-top: 5vh;
}
#panels > div {
  border: 2px solid #6dbbb4;
  border-radius: 5px;
  padding: 1em;
}
#panels > .panel2 {
  grid-column: 2 / span 1;
}
#panels > .panel3 {
  grid-column: 3 / span 1;
}
#panels > .panel4 {
  grid-column: 4 / span 1;
}

/* transition effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-transition {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter,
.list-leave-active {
  opacity: 0;
  transform: translateY(40px);
}
</style>
