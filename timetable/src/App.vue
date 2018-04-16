<template>
  <div id="app">
    <keep-alive>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </keep-alive>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: 'App',
  data () {
    return {  
      campus: "",
      major: ""
    }
  }
}

</script>

<style>
html, body{
  background: #80cbc4;
  color: white;
  margin: 0 0;
}
button:focus {
  outline: none;
}
.fa {
  display: inline-block;
}
/* scrollbar 없애기 */
#element::-webkit-scrollbar { 
    display: none; 
}
body {
  overflow-y: hidden; 
  overflow-x: hidden;
}
@font-face {
  font-family: 'NanumSquareRoundR';
  src: url('./assets/NanumSquareRoundR.ttf');
}
@font-face {
  font-family: 'NanumSquareRoundB';
  src: url('./assets/NanumSquareRoundB.ttf');
}
#app {
  font-family: 'NanumSquareRoundR';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
