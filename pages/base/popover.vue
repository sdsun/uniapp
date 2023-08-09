<template>
  <view>
    <view style="height: 300rpx;"></view>
    <view style="position: relative;">
      <view @click="topBubble">1111</view>
      <g-popover
        :show="show"
        :mask="false"
        position="absolute"
        direction="bottom"
        @close="topBubble"
        width="200rpx"
        left="50rpx"
        top="-20rpx"
        translateY="-100%"
        triangleRight="100rpx"
        triangleBottom="-22rpx">
        <view>111</view>
        <view>111</view>
        <view>111</view>
        <view>111</view>
        <view>111</view>
      </g-popover>
    </view>
  </view>
</template>
<script>
	export default {
    name: "pagePopover",
		data() {
			return {
				itemList: [{
						title: '首页',
						icon: 'home'
					},
					{
						title: '收藏',
						icon: 'star'
					},
					{
						title: '分享',
						icon: 'partake'
					}
				],
				show: false
			};
		},
		methods: {
			rtBubble() {
				this.$refs.rtBubble.toggle();
			},
			topBubble() {
				this.show = !this.show;
			},
			itemClick(e) {
				let text = ["首页", "收藏", "分享"][e.index];
				this.tui.toast(`您点击了：${text}`);
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				this.$refs.rtBubble.toggle();
			}
		}
	};
</script>