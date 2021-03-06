<template>
	<b-navbar class="navbar" fixed-top spaced>
		<template slot="start">
			<b-navbar-item
				v-for="(item, idx) in routes"
				:key="idx"
				:to="item.to"
				:title="item.name"
				:disabled="item.disabled"
				:event="item.disabled ? '' : 'click'"
				tag="router-link"
				:class="{ navbar__item: true, 'navbar__item-disabled': item.disabled }"
				>{{ item.name }}</b-navbar-item
			>
		</template>
		<template slot="end">
			<b-navbar-item tag="div" class="field">
				<b-switch
					v-model="currentTheme"
					true-value="dark"
					false-value="light"
					>{{ currentTheme }}</b-switch
				>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
  import { Action, Getter } from 'vuex-class';

  import { Theme, Route } from '@client';

	import switchTheme from '@/utils/switchTheme';

	@Component
	export default class Navbar extends Vue {
		@Getter theme!: Theme;

		private readonly routes: Route[] = [
			{ to: '/home', name: 'home' },
			// { to: '/bio', name: 'bio', disabled: true },
			{ to: '/skills', name: 'skills' },
			{ to: '/projects', name: 'projects', disabled: true },
			{ to: '/blog', name: 'blog', disabled: true },
		];

		@Action changeTheme!: (val: Theme) => void;

		private get currentTheme(): Theme {
			return this.theme;
		}

		private set currentTheme(val: Theme) {
			this.changeTheme(val);
			switchTheme(val);
		}
	}
</script>

<style scoped lang="scss">
	@import '~bulma/sass/utilities/initial-variables';

	.navbar {
		background-color: var(--bg-color);

		&__item {
			color: var(--primary-color);
			text-transform: lowercase;
			background-color: var(--bg-color);

			&:hover,
			&:focus {
				color: var(--secondary-color);
				background-color: var(--link-bg-color-hover);
			}

			&-disabled {
				color: var(--font-color) !important;

				&:hover {
					color: inherit;
					background-color: transparent;
					cursor: not-allowed;
				}

				&:focus {
					color: inherit;
					background-color: transparent;
				}
			}
		}
	}

	.router-link-active {
		background-color: var(--active-link-bg-color);

		&:hover {
			background-color: var(--active-link-bg-color-hover);
		}
	}
</style>

<style lang="scss">
	.navbar,
	.navbar-menu {
		background-color: var(--bg-color) !important;
	}

	.navbar-item {
		&:not(:last-child) {
			margin-right: 1ch;
		}
	}

	.navbar-item .switch {
		color: var(--font-color) !important;
	}
</style>
