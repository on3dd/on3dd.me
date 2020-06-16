<template>
  <section class="main-content">
    <PageSkills />
  </section>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import PageSkills from '@/components/Skills/Index.vue';

	@Component({
		components: {
			PageSkills,
		},
	})
	export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
