<template>
	<div id="header">
        <!-- <i class="fa fa-chevron-circle-left" aria-hidden="true" onclick="window.history.go(-1); return false;"></i> -->
		<div id="links">
            <ul id="breadcrumb">
                <li><a href="#"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                <li v-show="campusPage"><a href="#/campus"><span class="icon icon-beaker"> </span> {{campus}} Campus</a></li>
                <li v-show="majorPage"><a href="#/major"><span class="icon icon-double-angle-right"></span> {{major}}전공</a></li>
                <li v-show="forth"><a href="#/"><span class="icon icon-rocket"> </span> Getting started</a></li>
                <li v-show="fifth"><a href="#"><span class="icon icon-arrow-down"> </span> Download</a></li>
            </ul>
        </div>
        <div id="next">
            <transition name="bounce">
                 <router-link to="/liberal" exact>
                    <button class="next-btn" id="liberal-btn" v-if="liberalBtn" @click="liberalBtn = !liberalBtn">교양과목담기</button>
                 </router-link>
            </transition>
            <button class="next-btn" id="other-major-btn">다른전공담기</button>
        </div>
	</div>
</template>

<script>
/* eslint-disable*/
	export default{
        data () {
            return {
                liberalBtn: true,
                campusPage: true,
                forth: false,
                fifth: false
            }
        },
        computed: {
          campus() {
            return this.$store.state.campus
          },
          major(){
            return this.$store.state.major
          }
        },
        props: {
          majorPage : {
            type: Boolean
          }
        }
    }
</script>

<style scoped>
/*breadcrumb*/
* {
  margin: 0;
  padding: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  text-align: center;
  background-color: #34495e;
}

h1 {
  font-weight: 100;
  font-size: 32px;
  padding: 40px;
  color: #fff;
}

#breadcrumb {
  list-style: none;
  display: inline-block;
}
#breadcrumb .icon {
  font-size: 14px;
}
#breadcrumb li {
   display: inline-block;
}
#breadcrumb li a {
  color: #FFF;
  display: block;
  background: #3c9c93;
  text-decoration: none;
  position: relative;
  height: 40px;
  line-height: 40px;
  padding: 0 10px 0 5px;
  text-align: center;
  margin-right: 23px;
}
#breadcrumb li:nth-child(even) a {
  background-color:  #3c9c93;
}
#breadcrumb li:nth-child(even) a:before {
  border-color:  #3c9c93;
  border-left-color: transparent;
}
#breadcrumb li:nth-child(even) a:after {
  border-left-color: #3c9c93;
}
#breadcrumb li:first-child a {
  padding-left: 15px;
  -moz-border-radius: 4px 0 0 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px 0 0 4px;
}
#breadcrumb li:first-child a:before {
  border: none;
}
#breadcrumb li:last-child a {
  padding-right: 15px;
  -moz-border-radius: 0 4px 4px 0;
  -webkit-border-radius: 0;
  border-radius: 0 4px 4px 0;
}
#breadcrumb li:last-child a:after {
  border: none;
}
#breadcrumb li a:before, #breadcrumb li a:after {
  content: "";
  position: absolute;
  top: 0;
  border: 0 solid #3c9c93;
  border-width: 20px 10px;
  width: 0;
  height: 0;
}
#breadcrumb li a:before {
  left: -20px;
  border-left-color: transparent;
}
#breadcrumb li a:after {
  left: 100%;
  border-color: transparent;
  border-left-color: #3c9c93;
}
#breadcrumb li a:hover {
  background-color: #1abc9c;
}
#breadcrumb li a:hover:before {
  border-color: #1abc9c;
  border-left-color: transparent;
}
#breadcrumb li a:hover:after {
  border-left-color: #1abc9c;
}
#breadcrumb li a:active {
  background-color: #16a085;
}
#breadcrumb li a:active:before {
  border-color: #16a085;
  border-left-color: transparent;
}
#breadcrumb li a:active:after {
  border-left-color: #16a085;
}

/*header_ combination */
#header {
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(10, 1fr);  
    position: absolute;
    top: 0; 
}
#links, #next {
    display: inline-block;
}
#links{
    grid-column: 1 / span 3;
}
#next {
    grid-column: 9 / span 2;
}

.next-btn{
  background-color: #48a9a0;
  color: white;
  width: 100px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  grid-column-start: 3;
}

/* ul{
    list-style-type: none;
    display: inline-block;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
} */

.next-btn{
    color: white;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 14px;
}

/* 뒤로가기 버튼 */
.fa-chevron-circle-left{
    font-size: 1.8em;
    position: absolute;
    left: 2vw;
    cursor: pointer;
}

.router-link-active{
    color: #65bbb3;
}
/* transition effect */

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
    
  margin-left: -30px;
  }
  100% {
    transform: scale(0);
    margin-left: 300px;
  }
}
</style>