<template>
	<div id="footer">
        <!-- <i class="fa fa-chevron-circle-left" aria-hidden="true" onclick="window.history.go(-1); return false;"></i> -->
		<div id="links">
            <ul>
                <li><router-link to="/campus" exact>●</router-link></li>
                <li><router-link to="/choice" exact>●</router-link></li>
                <li><router-link to="/major" exact>●</router-link></li>
                <li><router-link to="/grade" exact>●</router-link></li>
            </ul>
        </div>
        <div id="next">
            <transition name="bounce">
                <button class="next-btn" id="liberal-btn" v-if="show" @click="show = !show">교양과목담기</button>
            </transition>
            <button class="next-btn" id="other-major-btn">다른 전공 담기</button>
        </div>
	</div>
</template>

<script>
/* eslint-disable*/
	export default{
        data () {
            return {
                show: true
            }
        }
    }
</script>

<style scoped>
#footer {
    position: absolute;
    bottom: 15px;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);   
}
#links, #next {
    display: inline-block;
}
#links{
    grid-column-start: 2;
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


ul{
    list-style-type: none;
    display: inline-block;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
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