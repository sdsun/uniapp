<template>
  <view class="page-container">
    <g-container
      title="标题"
      subTitle="More"
      @headerRight="handleMore">
      <view style="height: 200rpx;"></view>
    </g-container>
    <g-container title="标题" :headerInBox="false">
      <template #right>
        右侧内容
      </template>
      <view style="height: 200rpx;"></view>
    </g-container>
  </view>
</template>

<script>
	export default {
		name: "page-container",
    data() {
      return {}
    },
    methods: {
      handleMore() {
        console.log('click more')
      }
    }
	}
</script>

<style lang="scss">
page{
  padding: 24rpx;
}
</style>