<template>
  <view class="page-button">
    <view>
      <view style="margin-bottom: 10px;">
      <g-button
        type="primary"
        text="Primary Btn">
      </g-button>
      </view>
      <g-button
        text="Gradient Btn"
        color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"
        style="margin-bottom: 16rpx;">
      </g-button>
    </view>
  </view>
</template>
<style lang="scss">
page{
  padding: 24rpx;
}
.g-grid{
  @include flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
</style>