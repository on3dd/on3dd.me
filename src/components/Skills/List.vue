<template>
  <div class="skills-list">
    <SkillsListItem v-for="(item, idx) in skillsList" :key="idx" :item="item" />
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import SkillsListItem from './ListItem.vue';
	import Skill from '@/types/skill.ts';

	@Component({
		components: {
			SkillsListItem,
		},
	})
	export default class SkillsList extends Vue {
		private readonly skillsList: Skill[] = [
			{
				name: 'HTML, CSS',
				amount: 90,
			},
			{
				name: 'JavaScript',
				amount: 80,
			},
			{
				name: 'TypeScript',
				amount: 70,
			},
			{
				name: 'Go',
				amount: 60,
			},
			{
				name: 'Node.js',
				amount: 50,
			},
			{
				name: 'SQL',
				amount: 50,
			},
			{
				name: 'NoSQL',
				amount: 40,
			},
			{
				name: 'GraphQL',
				amount: 30,
			},
			{
				name: 'Docker',
				amount: 20,
			},
		];
	}
</script>

<style lang="scss" scoped>
</style>
