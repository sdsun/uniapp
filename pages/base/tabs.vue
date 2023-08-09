<template>
  <view class="page-tabs">
    <view class="page-tabs__header">
      (Sticky、Scroll、Suffix Slot) DEMO
    </view>
    <g-tabs @change="handleChange" :tabs="list" scroll isSticky>
      <template #suffix>
        <g-icon name="vk" :size="46" class="g-primary" isDot></g-icon>
      </template>
    </g-tabs>
    <view>
      <view
        v-for="item in 100"
        :key="item"
        style="padding: 12rpx 24rpx; color: #666;">
        {{ item }}
      </view>
    </view>
  </view>
</template>
<script>
export default {
  name: "page-tabs",
  data() {
    return {
      current: 0,
      list: [
        {
          name: "Local",
          badge: 1
        },
        {
          name: "Politics"
        },
        {
          name: "Faith"
        },
        {
          name: "Sports"
        },
        {
          name: "Entertainment",
          badge: 100
        },
        {
          name: "Society"
        },
        {
          name: "Techonology"
        },
        {
          name: "Business"
        },
        {
          name: "Health"
        },
        {
          name: "Science"
        },
        {
          name: "LifeStyle"
        },
        {
          name: "Crypto"
        }
      ]
    };
  },
  methods: {
    handleChange({ index }) {
      this.current = index
    }
  }
}
</script>
<style lang="scss" scoped>
.page-tabs {
  &__header {
    height: 400rpx;
    @include flex;
    justify-content: center;
    align-items: center;
    color: rgba($color: #FFF, $alpha: .8);
    background: #333;
    font-size: 28rpx;
  }
}
</style>