<template>
  <view class="page-divider">
    <view class="login">
      <view style="margin: 20px;">
        <g-divider/>
      </view>
      <view style="margin: 20px;">
        <g-divider><text>111</text></g-divider>
      </view>
      <view style="margin: 20px;">
        <g-divider position="left">text</g-divider>
      </view>
      <view style="margin: 20px;">
        <g-divider position="right">text</g-divider>
      </view>
      <view style="margin: 20px;">
        <g-divider style="border-color: red; border-style: dashed;">text</g-divider>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "page-divider"
}
</script>
<style lang="scss">
page{
  padding: 24rpx;
  background: #FFF;
}
</style>