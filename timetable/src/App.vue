<template>
  <div id="app">
    <keep-alive>
        <transition name="fade" mode="out-in">
          <component v-on:view="changeView($event)" v-bind:is="currentView"></component>
        </transition>
      </keep-alive>
  </div>
</template>

<script>
import Campus from './components/Campus.vue'
import Choice from './components/ChoiceMajorLiberal.vue'
export default {
  name: 'App',
  components: {
    'campus': Campus,
    'choice': Choice
  },
  data () {
    return {
      currentView: 'campus'
    }
  },
  methods: {
    changeView: function (view) {
      this.currentView = view
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
