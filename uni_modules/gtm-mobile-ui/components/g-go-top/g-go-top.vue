<template>
  <view
    class="g-go-top"
    v-show="visible"
    @tap.stop="goTop"
    :style="{
      bottom: `${bottom}rpx`,
      right: `${right}rpx`
    }">
    <g-icon
      name="up"
      color="#FFF"
      :size="42">
    </g-icon>
  </view>
</template>

<script>
export default {
	name: 'g-go-top',
	props: {
		//回顶部按钮距离底部距离 rpx
		bottom: {
			type: Number,
			default: 180
		},
		//回顶部按钮距离右侧距离 rpx
		right: {
			type: Number,
			default: 25
		},
		//距离顶部多少距离显示 px
		top: {
			type: Number,
			default: 200
		},
		//滚动距离
		scrollTop: {
			type: Number
		},
		//回顶部滚动时间
		duration: {
			type: Number,
			default: 120
		}
	},
	watch: {
		scrollTop(newValue, oldValue) {
			this.change();
		}
	},
	data() {
		return {
			visible: false
		};
	},
	methods: {
		goTop() {
			uni.pageScrollTo({
				scrollTop: 0,
				duration: this.duration
			});
		},
		change() {
			let show = this.scrollTop > this.top;
			if ((show && this.visible) || (!show && !this.visible)) {
				return;
			}
			this.visible = show;
		}
	}
};
</script>

<style lang="scss" scoped>
.g-go-top{
  width: 80rpx;
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  position: fixed;
  z-index: 999;
  background: $g-primary;
  border-radius: 50%;
}
</style>
