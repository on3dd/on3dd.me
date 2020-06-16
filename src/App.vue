<template>
  <div id="app">
    <header class="header">
      <BaseNavbar />
    </header>
    <main class="main">
      <router-view />
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
	/* Prevent bulma scroll style */
	html {
		overflow-y: auto !important;
	}

	.main {
		margin-top: 1rem;
  }

	.main-content {
		padding: 2rem;
	}
</style>
