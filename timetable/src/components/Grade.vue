<template>
  <div v-on:mouseup="modalClose">
    <app-header v-bind:majorPage="majorPage"></app-header>
    <div id="grade">
      <h1 id="question" v-if="question">전공선택 페이지입니다</h1>
      <div id="grades" class="grades">
        <ul class="tabs" role="tablist">
          <li>
            <input type="radio" name="tabs" id="tab1" checked />
            <label for="tab1" role="tab" aria-selected="true" aria-controls="panel1" tabindex="0">1학년</label>
            <div class="back-panel"></div>
            <div v-if="isloading" v-for="lecture in lectures1" id="tab-content1" class="tab-content" role="tabpanel" aria-labelledby="firstGrade" aria-hidden="false">
              <card v-bind:lecture="lecture" v-on:lecture="addAndRemoveItem($event)"></card>
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" id="tab2" />
            <label for="tab2" role="tab" aria-selected="true" aria-controls="panel2" tabindex="0" >2학년</label>
            <div v-if="isloading" v-for="lecture in lectures2" id="tab-content2" class="tab-content" role="tabpanel" aria-labelledby="secondGrade" aria-hidden="false">
              <card v-bind:lecture="lecture" v-on:lecture="addAndRemoveItem($event)"></card>
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" id="tab3" />
            <label for="tab3" role="tab" aria-selected="true" aria-controls="panel3" tabindex="0" >3학년</label>
            <div v-if="isloading" v-for="lecture in lectures3" id="tab-content3" class="tab-content" role="tabpanel" aria-labelledby="thirdGrade" aria-hidden="false">
              <card v-bind:lecture="lecture" v-on:lecture="addAndRemoveItem($event)"></card>
            </div>
          </li>
          <li>
            <input type="radio" name="tabs" id="tab4" />
            <label for="tab4" role="tab" aria-selected="true" aria-controls="panel4" tabindex="0" >4학년</label>
            <div v-if="isloading" v-for="lecture in lectures4" id="tab-content4" class="tab-content" role="tabpanel" aria-labelledby="forthGrade" aria-hidden="false">
              <card v-bind:lecture="lecture" v-on:lecture="addAndRemoveItem($event)"></card>
            </div>
          </li>
        </ul>
 
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
      isloading: false,
      first: 0,
      // isActive1: false,
      // isActive2: false,
      // isActive3: false,
      // isActive4: false,
      appFooter: false,
      question: true
      //subjects: [
      //  {subjectName: '논리적사고', professor: '최원배', grade: '1', department: '정책학과'},
      //  {subjectName: '비판적사고', professor: '최원배', grade: '1', department: '정책학과'}
      //],
    };
  },
  computed: {
    lectures1() { 
      let obj = this.$store.getters.getSubjectLecture1
      if(obj == undefined){
        return undefined
      } //vuex보다 먼저 계산되었다가 나중에 다시 계산되어서 일단 이렇게 처리.
      return this.$store.getters.getSubjectLecture1[1]
    },
    lectures2(){
      let obj = this.$store.getters.getSubjectLecture2
      if(obj == undefined){
        return undefined
      }
      return this.$store.getters.getSubjectLecture2[2]
    },
    lectures3(){
      let obj = this.$store.getters.getSubjectLecture3
      if(obj == undefined){
        return undefined
      }
      return this.$store.getters.getSubjectLecture3[3]
    },
    lectures4(){
      let obj = this.$store.getters.getSubjectLecture4
      if(obj == undefined){
        return undefined
      }
      return this.$store.getters.getSubjectLecture4[4]
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
          return
        }
      }
      this.userLectures.push(subject);
    },
    lectures: function(isuGrade) { 
      // if(this.isloading == true && this.first < 4){
      //   this.$store.commit('createSubjectLecture', isuGrade)
      //   this.first++
      //   console.log('---------------------------')
      //   return this.$store.state.subjectLecture
      // }else if(this.isloading == true) {
      //   console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~`')
      //   return this.$store.state.subjectLecture
      // }
      // else{
      //   return ['loading...']
      // }
    },
    // toggleSelected: function(number) {
    //   //console.log(testdata);
    //   switch (number) {
    //     case 1:
    //       this.isActive1 = !this.isActive1;
    //       break;
    //     case 2:
    //       this.isActive2 = !this.isActive2;
    //       break;
    //     case 3:
    //       this.isActive3 = !this.isActive3;
    //       break;
    //     case 4:
    //       this.isActive4 = !this.isActive4;
    //       break;
    //   }
    //   this.moveToTop();
    //   if (
    //     this.isActive1 == false &&
    //     this.isActive4 == false &&
    //     this.isActive3 == false &&
    //     this.isActive2 == false
    //   ) {
    //     this.moveToDown();
    //   }
    // },
    // moveToTop: function() {
    //   this.marginTop = 0;
    //   this.question = false;
    // },
    // moveToDown: function() {
    //   this.marginTop = "25vh";
    //   this.question = true;
    // },
    modalClose: function(e) {
      var checkbox = document.getElementById("modal__trigger");
      ///if (checkbox.checked == true) {
        //var modal = document.getElementById("modal_dialog");
        //if (e.target !== modal) checkbox.checked = false;
      //}
    }
  },
  beforeCreate: function () {
     const baseURI = 'http://timetable.kiworkshop.org'
     this.$http.get(`${baseURI}/api/${this.$store.state.campus}/전공/${this.$store.state.major}.json`)
       .then((result) => {
          this.$store.commit('createSubjectLecture', result.body)
          this.isloading = true
          console.log('beforeCreated//')
        })
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
/* .button {
  background-color: #48a9a0;
  color: white;
  width: 80px;
  height: 80px;
  margin: 0 120px;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 10px;
} */
/* .button:hover {
  background-color: #6dbbb4;
}
.active,
.active:hover {
  background-color: #ff8f9e;
} */
/* 탭 */

.tabs {
    float: none;
    list-style: none;
    position: relative;
    margin: 80px 0 0 300px;
}
.tabs li {
  float: left;
  display: block;
}
.tabs input[type="radio"] {
  position: absolute;
  top: 0;
  left: -9999px;
}
.tabs label {
  display: block;
  padding: 14px 21px;
  border-radius: 2px 2px 0 0;
  font-size: 20px;
  font-weight: normal;
  text-transform: uppercase;
  background: #27ada0;
  cursor: pointer;
  position: relative;
  top: 4px;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.tabs label:hover {
  background: #51c4b8;
}
.tabs .tab-content {
  z-index: 3;
  display: none;
  overflow: hidden;
  width: 100%;
  font-size: 17px;
  line-height: 25px;
  padding: 5px 25px;
  position: relative;
  /* position: absolute; */
  top: 53px;
  left: 0;
  background: #2ab4a6;
}
/* 임시로 back에 panel붙여넣어놨는데, 더 해결해야함..ㅠㅠ */
.back-panel {
  z-index: 1;
  overflow: hidden;
  width: 140%;
  height: 60vh;
  font-size: 17px;
  line-height: 25px;
  padding: 25px;
  position: absolute;
  top: 53px;
  left: 0;
  background: #2ab4a6;
}
.tabs {
  position: absolute;
}
.tabs [id^="tab"]:checked + label {
  top: 0;
  padding-top: 17px;
  background: #2ab4a6;;
}
.tabs [id^="tab"]:checked ~ [id^="tab-content"] {
  display: block;
}

p.link {
  clear: both;
  margin: 380px 0 0 15px;
}
p.link a {
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  color: #fff;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #612e76;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}
p.link a:hover {
  background-color: #522764;
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
