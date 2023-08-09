<template>
  <view class="page-loading">
    <g-loading color="#333"></g-loading>
    <g-loading color="#333" :index="2"></g-loading>
    <g-loading color="#333" :index="3"></g-loading>
  </view>
</template>
<style lang="scss">
page{
  padding: 24rpx;
}
.page-loading{
  @include flex;
  justify-content: center;
  padding: 100rpx 0;
}
</style>