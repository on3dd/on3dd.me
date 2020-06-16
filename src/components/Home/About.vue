<template>
  <div class="container home__about">
    <p
      class="is-size-4 is-size-4-desktop home__about__text"
    >Mathematics and Computer Science student, Front-end web developer, JS & TS fan.</p>
    <p class="is-size-4 is-size-4-desktop home__about__text has-text-grey">
      <b-icon icon="map-marker" size="is-small" class="home__about__text__icon" />
      <a
        href="https://goo.gl/maps/JpvL1DgcvtoV69t76"
        title="find on google maps"
        class="home__about__text__link"
      >Vladivostok, Russia</a>
    </p>
    <div class="home__about__buttons">
      <template v-for="(item, idx) in routes">
        <b-button
          :key="idx"
          :icon-left="item.name"
          :href="item.to"
          :title="item.name"
          tag="a"
          size="is-medium"
          class="home__about__buttons__button"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Route from '@/types/route';

	@Component
	export default class HomeAbout extends Vue {
		private readonly routes: Route[] = [
			{ to: 'https://github.com/on3dd', name: 'github' },
			{ to: 'https://t.me/on3dd', name: 'telegram' },
			{ to: 'https://vk.com/on3dd', name: 'vk' },
			{ to: 'https://twitter.com/on3dd', name: 'twitter' },
			{ to: 'https://www.pinterest.ru/on3dd/', name: 'pinterest' },
			{ to: 'mailto:onedeadwave.work@gmai.com', name: 'gmail' },
		];
	}
</script>

<style scoped lang="scss">
	@import '~bulma/sass/utilities/initial-variables';
	@import '@/scss/unselectable.scss';

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
				display: inline-block;

				&:hover {
					color: $blue;
					text-decoration: underline;
				}
			}

			&__icon {
				color: inherit;
				margin-right: 0.25rem;
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
				margin-bottom: 0.5rem;

				@media (min-width: $tablet) {
					margin-right: 0.5rem;
				}
			}
		}
	}
</style>
