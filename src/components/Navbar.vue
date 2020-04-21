<template>
  <b-navbar
      class="navbar"
      fixed-top
      spaced
  >
    <template slot="start">
      <b-navbar-item
          v-for="(item, idx) in routes"
          :key="idx"
          class="navbar__item"
      >
        <router-link
            :to="item.to"
            class="navbar__item__link"
        >
          {{item.name}}
        </router-link>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Route from "@/types/route";

  @Component
  export default class Navbar extends Vue {
    private readonly routes: Route[] = [
      {to: '/', name: 'home'},
      {to: '/', name: 'bio'},
      {to: '/', name: 'projects'},
      {to: '/', name: 'skills'},
      {to: '/', name: 'blog'},
    ];
  }
</script>

<style scoped lang="scss">
  @import "~bulma/sass/utilities/initial-variables";

  .navbar {
    &__item {
      color: $blue;

      &:hover {
        color: darken($blue, 10%);
      }

      &__link {
        color: inherit;
        text-transform: lowercase;
      }
    }
  }
</style>