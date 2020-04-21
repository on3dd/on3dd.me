<template>
  <div id="app">
    <header class="header">
      <Navbar/>
    </header>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Navbar from "@/components/Navbar.vue";

  @Component({
    components: {
      Navbar,
    }
  })
  export default class App extends Vue {}
</script>

<style lang="scss">
  /* Prevent bulma scroll style */
  html {
    overflow-y: auto !important;
  }

  #app {
    .main {
      margin-top: 1rem;
    }
  }
</style>
