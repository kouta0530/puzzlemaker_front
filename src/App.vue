<template>
  <div id="app">
    <p-header headerLabel="puzzleMaker" />
    <router-view />
    <p-footer footerLabel="saki" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import PHeader from "@/components/PHeader.vue";
import PFooter from "@/components/PFooter.vue";

@Component({
  components: {
    PHeader,
    PFooter,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
