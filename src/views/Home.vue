<template>
  <section class="main-content">
    <PageHome />
  </section>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import PageHome from '@/components/Home/Index.vue';

	@Component({
		components: {
			PageHome,
		},
	})
	export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
