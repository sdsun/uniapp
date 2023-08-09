<template>
	<view class="container">
		<g-button
			v-for="item in list"
			type="primary"
			:key="item.dir"
			@click="toggle(item.dir)"
			style="margin-bottom: 24rpx;">
			{{ item.title }}
		</g-button>
		<view>
			<!-- 普通弹窗 -->
			<g-popup
				@touchmove.stop.prevent="moveHandle"
				ref="popup"
				background-color="#fff"
				@change="change">
				<view
					class="popup-content"
					:class="{
						'popup-height': type === 'left' || type === 'right'
					}">
					popup content
				</view>
			</g-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: '',
				list: [
					{ title: 'Top', dir: 'top' },
					{ title: 'Bottom', dir: 'bottom' },
					{ title: 'Center', dir: 'center' },
					{ title: 'Left', dir: 'left' },
					{ title: 'Right', dir: 'right' },
				]
			}
		},
		onReady() {},
		methods: {
			moveHandle() {
				console.log('move')
				return false
			},
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},
			toggle(type) {
				this.type = type
				this.$refs.popup.open(type)
			}
		}
	}
</script>
<style lang="scss">
	@mixin height {
		/* #ifndef APP-NVUE */
		height: 100%;
		/* #endif */
		/* #ifdef APP-NVUE */
		flex: 1;
		/* #endif */
	}
	
	page{
		padding: 24rpx;
	}

	.popup-content {
		@include flex;
		align-items: center;
		justify-content: center;
		padding: 30rpx;
		background-color: #fff;
	}

	.popup-height {
		@include height;
		width: 540rpx;
	}
</style>
