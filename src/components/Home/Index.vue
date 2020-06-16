<template>
  <div class="container">
    <HomeHeader />
    <HomeAbout />
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import HomeHeader from './Header.vue';
	import HomeAbout from './About.vue';

	@Component({
		components: {
			HomeHeader,
			HomeAbout,
		},
	})
	export default class HomeIndex extends Vue {}
</script>

<style scoped lang="scss">
</style>
