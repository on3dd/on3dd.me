<template>
  <section class="home">
    <PageHome/>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import PageHome from "@/components/PageHome.vue";

@Component({
  components: {
    PageHome,
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .home {
    padding: 2rem;
  }
</style>
