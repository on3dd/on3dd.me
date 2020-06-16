<template>
  <div class="skills-list__item">
    <span class="is-size-6 is-size-5-desktop has-text-black">{{item.name}}</span>
    <b-progress :value="item.amount" />
  </div>
</template>

<script lang="ts">
	import { Component, Vue, Prop } from 'vue-property-decorator';
	import Skill from '@/types/skill.ts';

	@Component
	export default class SkillsListItem extends Vue {
		@Prop({ type: Object, required: true }) item!: Skill;
	}
</script>

<style lang="scss" scoped>
	@import '@/scss/unselectable';

	.skills-list__item {
		margin-bottom: 1rem;

		span {
			@include unselectable;

			display: block;
		}
	}
</style>

<style lang="scss">
	@import '~bulma/sass/utilities/initial-variables';

	progress[value]::-webkit-progress-value {
		background-color: $blue;
	}
</style>
