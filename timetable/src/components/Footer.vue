<template>
	<div class="footer" v-bind:class=" {expand: expanded} ">
        <div class="expand-btn" @click="expand"> <i class="fa fa-expand" aria-hidden="true"></i></div>
		<div class="subjects">
            <ul v-for='item in userLectures'>
                <li>{{ item }} <i class="fa fa-times" v-on:click="addAndRemoveItem(item)" id="remove-btn" aria-hidden="true"></i></li>
            </ul>
        </div>
        <button id="btn-comb">조합하기</button>
	</div>
</template>

<script>
/* eslint-disable*/
export default{
    props: {
         userLectures: {
            type: Array
         }
    },
    methods: {
        addAndRemoveItem: function (item) {
            this.$emit('subject', item);
            //eventbus써야함 //this.isSelected = !this.isSelected;
        },
        expand: function(){
            this.expanded = !this.expanded
        }
    },
    data () {
      return {
        expanded: false
      }
    }
}
</script>

<style scoped>
.footer{
    background:#2e9087;
    padding: 14px 0;
    height: 4vh;
    z-index: 100;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.6s;
	transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
}
.expand {
    height: 96vh;
}
.expand-btn {
    display: inline-block;
    position: absolute;
    left: 30px;
    cursor: pointer;
}
ul{
    list-style-type: none;
    display: inline-block;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
    background:#83cfc8;
    color: black;
    padding: 10px 10px;
    border-radius: 10px;
}
a{
    color: white;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

.router-link-active{
    background: #eee;
    color: #65bbb3;
}
.subjects {
    display: inline-block;
    width: 80vw;

}
#remove-btn{
    font-size: 0.8em;
    cursor: pointer;
}
/* 조합하기 버튼 */
#btn-comb {
  display: inline-block;
  background-color: #48a9a0;
  color: white;
  width: 68px;
  height: 35px;
  margin: 0 20;
  margin-right: 100px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  position: absolute;
  right: 2vw;
}
</style>