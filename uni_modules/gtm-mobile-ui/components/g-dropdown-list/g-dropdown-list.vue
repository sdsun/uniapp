<template>
	<view>
		<view
      class="g-dropdown-list"
			:style="{
        height: selectHeight ? selectHeight + 'rpx' : 'auto'
      }">
			<view class="g-dropdown__title">
        {{ title }}
      </view>
			<view
        class="g-dropdown-view"
        :class="{
          'g-dropdownlist-show': show
        }"
				:style="{
          backgroundColor: backgroundColor,
          height: show ? height + 'rpx' : 0,
          top: top + 'rpx'
        }">
				<slot name="dropdownbox"></slot>
			</view>
		</view>
		<view
      v-if="isMask && show"
      class="g-dropdown__mask"
      :style="{
        backgroundColor:maskBackground
      }"
			@tap.stop="maskClick">
		</view>
	</view>
</template>

<script>
	export default {
		name: 'g-dropdown-list',
		emits: ['close'],
		props: {
			//控制显示
			show: {
				type: Boolean,
				default: false
			},
      // 类型 drop filter sort
      type: {
        type: String,
        default: 'drop'
      },
			//背景颜色
			backgroundColor: {
				type: String,
				default: 'transparent'
			},
			//top
			top: {
				type: Number,
				default: 0
			},
			//下拉框高度 rpx
			height: {
				type: Number,
				default: 300
			},
			//选择框高度
			selectHeight: {
				type: Number,
				default: 0
			},
			isMask: {
				type: Boolean,
				default: false
			},
			maskBackground: {
				type: String,
				default: 'transparent'
			}
		},
		methods: {
			maskClick() {
				this.$emit('colse')
			}
		}
	};
</script>

<style lang="scss" scoped>
	.g-dropdown-list {
		position: relative;
		z-index: 6;
	}

	.g-dropdown-view {
		width: 100%;
		overflow: hidden;
		position: absolute;
		z-index: -99;
		left: 0;
		opacity: 0;
		/* visibility: hidden; */
		transition: all 0.2s ease-in-out;
	}

	.g-dropdownlist-show {
		opacity: 1;
		z-index: 996;
		/* visibility: visible; */
	}

	.g-dropdown__mask {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .1);
		z-index: 5;
	}
</style>
