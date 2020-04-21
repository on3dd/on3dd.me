<template>
  <div class="container">
    <PageHomeHeader/>
    <PageHomeAbout/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import PageHomeHeader from "@/components/PageHomeHeader.vue";
  import PageHomeAbout from "@/components/PageHomeAbout.vue";

  @Component({
    components: {
      PageHomeHeader,
      PageHomeAbout
    }
  })
  export default class PageHome extends Vue {
  }
</script>

<style scoped lang="scss">

</style>