<template>
	<div class="skills-list">
		<SkillsListItem v-for="(item, idx) in skills" :key="idx" :item="item" />
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	import { SKILLS } from '@/utils/constants';

	import SkillsListItem from './ListItem.vue';

	@Component({
		components: {
			SkillsListItem,
		},
	})
	export default class SkillsList extends Vue {
		private get skills() {
			return SKILLS.sort((a, b) => {
				return b.amount - a.amount;
			});
		}
	}
</script>

<style lang="scss" scoped>
</style>
