<template>
  <view
    class="g-avatar"
    :class="[
      `g-avatar--${shape}`,
      `g-avatar--${size}`,
    ]">
    <image
				class="g-avatar__image"
				:src="url || defaultAvatar"
				:mode="mode"
        :class="[
          `g-avatar--${shape}`,
          `g-avatar--${size}`,
        ]"
			>
    </image>
  </view>
</template>
<script>
import defaultAvatar from './assets/avatar-default.jpg'
export default{
  name: "gAvatar",
  props: {
    // 头像形状 circle | square(默认)
    shape: {
      type: String,
      default: 'square'
    },
    // 头像大小 small，medium(默认)，large
    size: {
      type: String,
      default: 'medium'
    },
    // 头像地址
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'scaleToFill'
    }
  },
  data() {
    return {
      defaultAvatar
    }
  }
}
</script>
<style lang="scss" scoped>
.g-avatar{
  @include flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &__image{
    display: block;
  }
  &--circle{
    border-radius: 50%;
  }
  &--square{
    border-radius: 8rpx;
  }

  &--small{
    width: 48rpx;
    height: 48rpx;
  }
  &--medium{
    width: 64rpx;
    height: 64rpx;
  }
  &--large{
    width: 96rpx;
    height: 96rpx;
  }
  
}
</style>