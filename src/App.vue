<template>
  <div id="app">
    <header class="header">
      <TheNavbar/>
    </header>
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import TheNavbar from "@/components/TheNavbar.vue";

  @Component({
    components: {
      TheNavbar,
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
