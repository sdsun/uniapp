<template>
  <view class="page-avatar">
    <g-section title="基本用法" isLine></g-section>
    <view class="page-avatar__group">
      <g-avatar
        v-for="(item, index) in list"
        :key="index"
        :url="item.url" />
    </view>
    <g-section title="默认头像" isLine></g-section>
    <view class="page-avatar__group">
      <g-avatar />
    </view>
    <g-section title="头像形状" isLine></g-section>
    <view class="page-avatar__group">
      <g-avatar
        v-for="(item, index) in list"
        :key="index"
        :url="item.url"
        :shape="item.shape"/>
    </view>
    <g-section title="头像大小" isLine></g-section>
    <view class="page-avatar__group">
      <g-avatar
        v-for="(item, index) in list"
        :key="index"
        :url="item.url"
        :shape="item.shape"
        :size="item.size"/>
    </view>
  </view>
</template>
<script>

export default{
  name: 'pageAvatar',
  data() {
    return{
      list: [
        {
          url: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
          size: 'small',
          shape: 'circle'
        },
        {
          url: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
          size: 'medium',
          shape: 'circle'
        },
        {
          url: 'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
          size: 'large',
          shape: 'circle'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
page{
  padding: 24rpx;
  background: #F5F5F5;
}
.page-avatar{
  &__group{
    @include flex;
    padding: 10px;
    background: #FFF;
    margin-bottom: 12px;
    align-items: center;
  }
}
</style>