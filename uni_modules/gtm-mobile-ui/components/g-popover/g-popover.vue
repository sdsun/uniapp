<template>
	<view
		:class="{
			'g-flex-end': flexEnd
		}">
		<view
			class="g-popup-list"
			:class="{
				'g-popup-show': show,
				'g-z_index':show && position!='relative'
			}"
			:style="{
				width: width,
				backgroundColor: backgroundColor,
				borderRadius: radius,
				color: color,
				position: position,
				left: left,
				right: right,
				bottom: bottom,
				top: top,
				transform:`translate(${translateX},${translateY})`
			}">
			<view class="g-triangle" :style="triangleStyle"></view>
			<slot></slot>
		</view>
		<view
			@touchmove.stop.prevent="stop"
			class="g-popup-mask"
			:class="{
				'g-popup-show': show
			}"
			:style="{ backgroundColor: maskBgColor }"
		 	v-if="mask"
			@tap="handleClose">
		</view>
	</view>
</template>
<script>
	export default {
		name: 'gPopover',
		emits: ['close'],
		props: {
			//宽度
			width: {
				type: String,
				default: '300rpx'
			},
			//popup圆角
			radius: {
				type: String,
				default: '8rpx'
			},
			//popup 定位 left right top bottom值
			left: {
				type: String,
				default: 'auto'
			},
			right: {
				type: String,
				default: 'auto'
			},
			top: {
				type: String,
				default: 'auto'
			},
			bottom: {
				type: String,
				default: 'auto'
			},
			translateX:{
				type: String,
				default: '0'
			},
			translateY:{
				type: String,
				default: '0'
			},
			//背景颜色
			backgroundColor: {
				type: String,
				default: '#4c4c4c'
			},
			//字体颜色
			color: {
				type: String,
				default: '#fff'
			},
			//三角border-width
			borderWidth: {
				type: String,
				default: '12rpx'
			},
			//三角形方向 top left right bottom
			direction: {
				type: String,
				default: 'top'
			},
			//定位 left right top bottom值
			triangleLeft: {
				type: String,
				default: 'auto'
			},
			triangleRight: {
				type: String,
				default: 'auto'
			},
			triangleTop: {
				type: String,
				default: 'auto'
			},
			triangleBottom: {
				type: String,
				default: 'auto'
			},
			//定位 relative absolute  fixed
			position: {
				type: String,
				default: 'fixed'
			},
			//flex-end
			flexEnd: {
				type: Boolean,
				default: false
			},
			//是否需要mask
			mask: {
				type: Boolean,
				default: true
			},
			maskBgColor: {
				type: String,
				default: 'rgba(0, 0, 0, 0.4)'
			},
			//控制显示
			show: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			// 三角形样式
			triangleStyle() {
				const {
					borderWidth,
					triangleLeft,
					triangleRight,
					triangleTop,
					triangleBottom,
					direction,
					backgroundColor
				} = this
				const style = {
					borderWidth: borderWidth,
					left: triangleLeft,
					right: triangleRight,
					top: triangleTop,
					bottom: triangleBottom
				}
				switch(direction) {
					case 'top':
						style.borderColor = `transparent transparent ${backgroundColor} transparent`
						break
					case 'bottom':
						style.borderColor = `${backgroundColor}  transparent transparent transparent`
						break
					case 'left':
						style.borderColor = `transparent  ${backgroundColor} transparent transparent`
						break
					case 'right':
						style.borderColor = `transparent transparent  transparent ${backgroundColor}`
						break
				}
				return style
			}
		},
		methods: {
			// 关闭propover
			handleClose() {
				if (!this.show) {
					return;
				}
				this.$emit('close', {});
			},
			stop() {
				return false;
			}
		}
	};
</script>

<style scoped>
	.g-popup-list {
		z-index: 1;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.g-flex-end {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}

	.g-triangle {
		position: absolute;
		width: 0;
		height: 0;
		border-style: solid;
		z-index: 997;
	}

	.g-popup-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 995;
		transition: all 0.3s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.g-popup-show {
		opacity: 1;
		visibility: visible;
	}

	.g-z_index {
		z-index: 996;
	}
</style>
