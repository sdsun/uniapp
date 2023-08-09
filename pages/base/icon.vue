<template>
  <view class="page-icon">
    <view class="page-icon__warp">
      <view
        class="icon-item"
        v-for="item in icons"
        :key="item.icon_id"
        @click="handleClick(item.font_class)">
        <g-icon
          :name="item.font_class"
          :size="48">
        </g-icon>
        <text class="icon-item__class">{{ item.font_class }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  import icons from "@/uni_modules/gtm-mobile-ui/components/g-icon/iconfont.js";
	export default {
		name: "base-icon",
    data() {
      return {
        icons: icons.glyphs
      }
    },
    methods: {
      handleClick(val) {
        uni.setClipboardData({
          data: val
        });
      }
    }
	}
</script>

<style lang="scss" scoped>
page{
  padding: 24rpx;
}
.page-icon{
  &__warp{
    overflow: hidden;
    .icon-item{
      float: left;
      width: 233rpx;
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 25rpx 0;
      //#ifdef H5
      cursor: pointer;
      //#endif
      &__class{
        margin-top: 15rpx;
        height: 64rpx;
        line-height: 32rpx;
        font-size: 24rpx;
      }
    }
  }
}
</style>