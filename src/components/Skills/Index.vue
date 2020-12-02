<template>
	<div class="container">
		<h1 class="is-size-2 is-size-1-desktop has-text-weight-bold">Skills</h1>
		<SkillsList />
	</div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

	import SkillsList from './List.vue';

	@Component({
		components: {
			SkillsList,
		},
	})
	export default class SkillsIndex extends Vue {}
</script>

<style scoped lang="scss">
	@import '@/scss/unselectable';

	h1 {
		@include unselectable;

		margin-bottom: 1rem;
		color: var(--heading-color);
	}
</style>
