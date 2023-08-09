<template>
  <view class="page-cell">
    <g-cell-group title="标题">
      <view style="background: #FFF; border-radius: 12rpx; overflow: hidden;">
        <g-cell
          v-for="(item, index) in list"
          :key="index"
          :icon="item.icon"
          :title="item.title"
          arrow>
        </g-cell>
      </view>
    </g-cell-group>
  </view>
</template>
<script>
export default{
  name: "page-cell",
  data() {
    return {
      list: [
        {
          icon: 'config',
          title: 'Setting and privacy'
        },
        {
          icon: 'time',
          title: 'Your activity'
        },
        {
          icon: 'scan',
          title: 'QR code'
        },
        {
          icon: 'like',
          title: 'Favorites'
        },
        {
          icon: 'bank-card',
          title: 'Order and payment'
        },
        {
          icon: 'bookmark',
          title: 'Bookmark'
        }
      ]
    }
  }
}
</script>
<style lang="scss">
page{
  padding: 24rpx;
}
</style>