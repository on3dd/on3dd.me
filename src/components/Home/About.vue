<template>
	<div class="container home__about">
		<p class="is-size-4 is-size-4-desktop home__about__text-trivia">
			Mathematics and Computer Science student, Front-end web developer, JS & TS
			fan.
		</p>
		<p class="is-size-4 is-size-4-desktop home__about__text-geo">
			<b-icon
				icon="map-marker-alt"
				size="is-small"
				class="home__about__text__icon"
			/>
			<a
				href="https://goo.gl/maps/JpvL1DgcvtoV69t76"
				title="find on google maps"
				class="home__about__text__link"
				>Vladivostok, Russia
			</a>
		</p>
		<div class="home__about__buttons">
			<template v-for="(item, idx) in routes">
				<b-button
					:key="idx"
					:href="item.to"
					:title="item.name"
					:icon-left="iconLeft(item)"
					:icon-pack="iconPack(item)"
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

	import { Route } from '@client';
	import { ROUTES } from '@/utils/constants';

	@Component
	export default class HomeAbout extends Vue {
		private get routes() {
			return ROUTES;
		}

		private iconLeft(item: Route) {
			return item.icon || item.name;
		}

		private iconPack(item: Route) {
			return item.name === 'mail' ? 'fas' : 'fab';
		}
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
					color: var(--primary-color);
					text-decoration: underline;
				}
			}

			&__icon {
				color: inherit;
				margin-right: 0.5ch;
			}

			&-trivia {
				color: var(--font-color);
			}

			&-geo {
				color: var(--font-color-secondary);
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
				color: var(--font-color);
				background-color: var(--bg-color);
				border-color: var(--border-color);

				&:hover {
					background-color: var(--link-bg-color-hover);
				}

				@media (min-width: $tablet) {
					margin-right: 0.5rem;
				}
			}
		}
	}
</style>
