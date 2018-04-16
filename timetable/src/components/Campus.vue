<template>
  <div class="campus">
    <div id="title">
      <h1>어느 캠퍼스인가요?</h1>
    </div>
    <div id="seoul">
      <router-link to="/choice" exact><img v-on:click="saveCampus('서울')" src="../assets/seoul.png"></router-link>
    </div>
    <div id="erica">
      <router-link to="/choice" exact><img v-on:click="saveCampus('Erica')" src="../assets/erica.jpg"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Campus',
  data () {
    return {
      campus: ""
    }
  },
  methods: {
    saveCampus: function (campus) {
      //this.campus = campus
      //this.$emit('campus',this.campus)
      console.log("campus:"+campus)
      this.$store.commit('setCampus', campus)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  margin: 60px 0;
}
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
  width: 38vw;
  margin: 0 10px;
  padding: 0 0;
}
#seoul img, #erica img{
  width: 38vw;
  height: 60vh;
  cursor: pointer;
}
#seoul img:hover, #erica img:hover{
  opacity: 0.7;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
