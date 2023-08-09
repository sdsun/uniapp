<template>
  <view
    class="g-divider"
    :style="style"
    :class="[
      `g-divider--${position}`,
      {
      'g-divider--notext': !$slots.default && !$slots.$default
      }
    ]">
    <view
      v-if="$slots.default || $slots.$default"
      class="g-divider__text">
      <slot></slot>
    </view>
  </view>
</template>
<script>
export default{
  name: 'g-divider',
  props: {
    // 位置,可选 left center right
    position: {
      type: String,
      default: 'center'
    },
    style: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.g-divider{
  display: flex;
  align-items: center;
  border-color: #f2f2f2;
  border-style: solid;
  border-width: 0;
  font-size: 24rpx;
  color: #333;
  &::before, &::after{
    flex: 1;
    content: '';
    display: block;
    height: 0;
    box-sizing: border-box;
    border: inherit;
    border-color: inherit;
    border-style: inherit;
    border-width: 1px 0 0 0;
  }
  &--left{
    &::before{
      max-width: 32rpx;
    }
  }
  &--right{
    &::after{
      max-width: 32rpx;
    }
  }
  &--notext{
    &::after{
      display: none;
    }
  }
  &__text{
    margin: 0 16rpx;
  }
}
</style>