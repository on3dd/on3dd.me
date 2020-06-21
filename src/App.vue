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
	import BaseNavbar from '@/components/BaseUI/BaseNavbar.vue';

	@Component({
		components: {
			BaseNavbar,
		},
	})
	export default class App extends Vue {}
</script>

<style lang="scss">
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
