<template>
  <div class="home__header">
    <div class="home__header__image">
      <figure class="image is-square">
        <img class="avatar is-rounded" src="@/assets/avatar.png" draggable="false" />
      </figure>
    </div>
    <div class="home__header__name">
      <h1 class="is-size-2 is-size-1-desktop has-text-black has-text-weight-bold">Artyom</h1>
      <h2 class="is-size-3 is-size-2-desktop has-text-weight-semibold">@on3dd</h2>
    </div>
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';

	@Component
	export default class HomeHeader extends Vue {}
</script>

<style scoped lang="scss">
	@import '~bulma/sass/utilities/initial-variables';
	@import '@/scss/unselectable.scss';

	.home__header {
		display: flex;
		align-items: center;
		align-self: flex-start;
		margin-bottom: 2rem;

		@media (max-width: $tablet) {
			justify-content: center;
		}

		&__name {
			display: inline-flex;
			flex-direction: column;

			h1,
			h2 {
				vertical-align: text-top;
			}
		}

		&__image {
			@include unselectable;

			margin-right: 1.5rem;
			width: 100%;
			max-width: 128px;

			// &::before {
			// 	content: "";
			// 	position: absolute;
			// 	top: -7px;
			// 	left: -9px;
			// 	height: 146px;
			// 	width: 146px;
			// 	border: 4px solid $blue;
			// 	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
			// 	border-radius: 50%;
			// }
		}
	}
</style>
