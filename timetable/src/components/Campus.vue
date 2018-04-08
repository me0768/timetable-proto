<template>
  <div class="campus">
    <div id="title">
      <h1>어느 캠퍼스인가요?</h1>
    </div>
    <div id="seoul">
      <img v-on:click="transitionToChoice" src="../assets/seoul.png">
    </div>
    <div id="erica">
      <img src="../assets/erica.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Campus',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    transitionToChoice: function () {
      this.$emit('transitionToChoice', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#seoul, #erica {
  display: inline-block;
  width: 48vw;
  margin: 0 0;
  padding: 0 0;
  cursor: pointer;
}
#seoul img, #erica img{
  width: 48vw;
  height: 80vh;
}
#seoul img:hover, #erica img:hover{
  opacity: 0.7;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
