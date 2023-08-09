<template>
  <view class="g-result">
    <slot name="icon">
      <g-icon
        v-if="type"
        :size="96"
        :color="color"
        :name="`${type}-c-f`">
      </g-icon>
    </slot>
    <view class="g-result__title">
      {{ title }}
    </view>
    <view class="g-result__desc" v-if="desc">
      {{ desc | formatText }}
    </view>
    <slot></slot>
  </view>
</template>
<script>
export default{
  name: "gResult",
  props: {
    // 结果类型 success fail warning info wait
    type: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 描述
    desc: {
      type: String,
      default: ''
    }
  },
  filters: {
    formatText(val) {
      return val.replace(/\\n/g, '\n')
    }
  },
  computed: {
    color() {
      const list = [
        {
          type: 'success',
          color: '#1677FF'
        },
        {
          type: 'info',
          color: '#1677FF'
        },
        {
          type: 'fail',
          color: '#ff3b30'
        },
        {
          type: 'warning',
          color: '#ff8f1f'
        },
        {
          type: 'wait',
          color: '#00B578'
        },
      ]
      return list.find(item => item.type == this.type)?.color || ''
    }
  }
}
</script>
<style lang="scss" scoped>
.g-result{
  padding: 24rpx;
  @include flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  &__title{
    font-size: 30rpx;
    color: #333;
    margin-top: 24rpx;
  }
  &__desc{
    font-size: 22rpx;
    color: #999;
    margin-top: 12rpx;
    white-space: pre-line;
  }
}
</style>