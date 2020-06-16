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
        :class="{'navbar__item': true, 'navbar__item-disabled': item.disabled}"
      >{{item.name}}</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import Route from '@/types/route';

	@Component
	export default class Navbar extends Vue {
		private readonly routes: Route[] = [
			{ to: '/home', name: 'home' },
			// { to: '/bio', name: 'bio', disabled: true },
			{ to: '/skills', name: 'skills'},
      { to: '/projects', name: 'projects', disabled: true },
			// { to: "/blog", name: "blog", disabled: true }
		];
	}
</script>

<style scoped lang="scss">
	@import '~bulma/sass/utilities/initial-variables';

	.navbar {
		&__item {
			color: $blue;
			text-transform: lowercase;

			&:hover {
				color: darken($blue, 10%);
			}

			&-disabled {
				color: $grey-darker;

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
		background-color: #fafafa;
	}
</style>
