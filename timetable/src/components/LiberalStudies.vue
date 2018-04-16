<template>
    <div v-on:mouseup="modalClose">
    <app-header v-if="appHeader" v-bind:subject="subject"></app-header>
        <div id="grade" class="center">
        <h1 id="question" v-if="question">몇학년 과목을 볼까요?</h1>
        
        <div id="panels">,
            <div class="panel1" v-if="isActive1">
                <card v-on:subject="addToHeader($event)"></card>
                <card></card>
                <card></card>
            </div>
        <div class="panel2" v-if="isActive2">컴포넌트2</div>
        <div class="panel3" v-if="isActive3">컴포넌트3</div>
        <div class="panel4" v-if="isActive4">컴포넌트4</div>
        </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
/* eslint-disable*/
import Header from './Header.vue'
import Card from './Card.vue'
import Footer from './Footer.vue'

export default {
name: 'liberalStudies',
components: {
'app-header': Header,
'card' : Card,
'app-footer': Footer
},
data () {
return {
isActive1: false,
isActive2: false,
isActive3: false,
isActive4: false,
appHeader: false,
question: true,
subject: "",
subjects: [
{subjectName: '논리적사고', professor: '최원배', grade: '1', department: '정책학과'},
{subjectName: '비판적사고', professor: '최원배', grade: '1', department: '정책학과'}
]
}
},
methods: {
addToHeader: function (subject) {
this.appHeader = true
this.subject = subject
},
toggleSelected: function (number) {
switch(number) {
case 1:
this.isActive1 = !this.isActive1
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
this.moveToTop()
if(this.isActive1 == false && this.isActive4 == false && this.isActive3 == false && this.isActive2 == false){
this.moveToDown()
}
},
moveToTop: function () {
// move previous items to top
var container = document.getElementById('grade')
container.classList.remove("center")
var grades = document.getElementById('grades')
grades.classList.remove("grades")
this.question = false
},
moveToDown: function () {
var container = document.getElementById('grade')
container.className = "center"
var grades = document.getElementById('grades')
grades.className = "grades"
},
modalClose: function (e){
var checkbox = document.getElementById('modal__trigger');
if(checkbox.checked == true){
var modal = document.getElementById('modal_dialog')
console.log(modal)
console.log(e.target)
if(e.target !== modal)
checkbox.checked = false
}
}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#question{
font-size: 2rem;
}
.center {
margin-top: 25vh;
}
.grades {
margin-top: 10vh;
}
#grade {
-webkit-transition: all 0.4s ease;
-moz-transition: all 0.4s ease;
-o-transition: all 0.4s ease;
transition: margin-top 0.4s ease;
height: 62vh;
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
.button:hover{
background-color: #6dbbb4;
}
.active, .active:hover {
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