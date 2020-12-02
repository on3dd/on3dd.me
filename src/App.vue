<template>
	<div id="app">
		<header class="header">
			<BaseNavbar />
		</header>
		<main class="main">
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</main>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { Getter } from 'vuex-class';

	import { Theme } from '@client';
	import switchTheme from '@/utils/switchTheme';

	import BaseNavbar from '@/components/BaseUI/BaseNavbar.vue';

	@Component({
		components: {
			BaseNavbar,
		},
	})
	export default class App extends Vue {
		@Getter theme!: Theme;

		private mounted() {
			if (this.theme) switchTheme(this.theme);
		}
	}
</script>

<style lang="scss">
	@import './scss/main.scss';

	#app {
		animation: 0.5s onload ease-out;
	}

	@keyframes onload {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.main {
		margin-top: 1rem;
	}

	.main-content {
		padding: 2rem;
	}
</style>
