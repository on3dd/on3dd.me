<template>
  <div class="container home__about">
    <p class="is-size-4 is-size-4-desktop home__about__text">
      Mathematics and Computer Science student, Full-stack web developer, Vue.js fan.
    </p>
    <p class="is-size-4 is-size-4-desktop home__about__text has-text-grey">
      <b-icon
          icon="map-marker"
          size="is-small"
          class="home__about__text__icon"
      />
      <a
          class="home__about__text__link"
          href=""
      >
        Vladivostok, Russia
      </a>
    </p>
    <div class="home__about__buttons">
      <template v-for="(item, idx) in routes">
        <b-button
            :key="idx"
            :icon-left="item.name"
            :href="item.to"
            class="home__about__buttons__button"
            size="is-medium"
            tag="a"
        />
      </template>
      </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Route from "@/types/route";

  @Component
  export default class PageHomeAbout extends Vue {
    private readonly routes: Route[] = [
      {to: 'https://github.com/on3dd', name: 'github-circle'},
      {to: 'https://t.me/on3dd', name: 'telegram'},
      {to: 'https://vk.com/on3dd', name: 'vk'},
      {to: 'https://twitter.com/on3dd', name: 'twitter'},
      {to: 'https://www.pinterest.ru/on3dd/', name: 'pinterest'},
      {to: 'mailto:onedeadwave.work@gmai.com', name: 'gmail'},
    ];
  }
</script>

<style scoped lang="scss">
  @import "~bulma/sass/utilities/initial-variables";

  .home__about {
    @media (max-width: $tablet) {
      text-align: center;
    }

    &__text {
      width: 100%;

      @media (min-width: $desktop) {
        max-width: 500px;
      }

      @media (min-width: $widescreen) {
        max-width: 900px;
      }

      &__link {
        color: inherit;
        display:inline-block;

        &:hover {
          color: $blue;
          text-decoration: underline;
        }
      }

      &__icon {
        color: inherit;
        margin-right: .25rem;
      }
    }

    &__buttons {
      margin: 1rem 0;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      @media (min-width: $tablet - 1px) {
        display: inline-flex;
        width: 100%;
        max-width: 45%;
      }

      @media (min-width: $desktop) {
        display: inline-block;
      }

      &__button {
        margin-bottom: .5rem;

        @media (min-width: $tablet) {
          margin-right: .5rem;
        }
      }
    }
  }
</style>