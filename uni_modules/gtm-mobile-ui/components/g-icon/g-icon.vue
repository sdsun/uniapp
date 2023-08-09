<template>
	<text
		:class="['g-icon', 'iconfont', `icon-${name}`]"
    :style="{
      color: color,
      fontSize: `${size}rpx`,
      fontWeight: fontWeight
    }"
		@click="handleClick">
  </text>
</template>

<script>
	export default {
		name: "f-icon",
		emits: ['click'],
		props: {
			name: {
				type: String,
				default: ''
			},
			size: {
				type: Number,
				default: 28
			},
			color: {
				type: String,
				default: ''
			},
			fontWeight: {
				type: String,
				default: 'normal'
			}
		},
		methods: {
			handleClick() {
				this.$emit('click')
			}
		}
	}
</script>

<style scoped>
	@import './iconfont.css';
	@font-face {
		font-family: iconfont;
		src: url('./iconfont.ttf') format('truetype');
	}
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

</style>