<template>
  <view class="g-cell-group">
    <view v-if="title" class="g-cell-group__title">
      <slot name="title">
        <text class="g-cell-group__title__text">{{ title }}</text>
      </slot>
    </view>
    <view class="g-cell-group__wrapper">
      <slot />
    </view>
  </view>
</template>

<script>
export default {
  name: 'g-cell-group',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.g-cell-group {
  flex: 1;

  &__title {
    padding: 0 24rpx;
    height: 72rpx;
    &__text {
      font-size: 28rpx;
      line-height: 72rpx;
      font-weight: bold;
      position: relative;
      padding-left: 20rpx;
      &::before{
        content: '';
        display: block;
        height: 24rpx;
        width: 6rpx;
        background: $g-primary;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -12rpx;
        border-radius: 3rpx;
      }
    }
  }

  &__wrapper {
    position: relative;
  }
}
</style>

