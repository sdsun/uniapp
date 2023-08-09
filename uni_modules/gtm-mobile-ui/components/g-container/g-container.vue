<template>
  <view
    class="g-container"
    :class="{'g-container__headerInBox': headerInBox}"
  >
    <view class="g-container__header">
      <view
        class="g-container__header-left"
        :class="{
          'g-container__header--hasline': hasTitleLine
        }"
        v-if="title">
        <slot name="title">{{title}}</slot>
      </view>
      <view
        class="g-container__header-right"
        v-if="subTitle || $slots.right"
        @tap.stop="handleClickRight">
        <slot name="right">{{ subTitle }}</slot>
      </view>
    </view>
    <view class="g-container__body">
      <slot></slot>
    </view>
  </view>
</template>
<script>
export default{
  name: "gContainer",
  emits: ['headerRight'],
  props: {
    // 标题是否在容器中
    headerInBox: {
      type: Boolean,
      default: true
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 副标题
    subTitle: {
      type: String,
      default: ''
    },
    // 是否有标题的左侧竖线
    hasTitleLine: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClickRight() {
      this.$emit('headerRight')
    }
  }
}
</script>
<style lang="scss" scoped>
$container-radius: 24rpx;
.g-container{
  margin-bottom: 24rpx;
  &__headerInBox{
    background: #FFF;
    border-radius: $container-radius;
    .g-container__header{
      border-bottom: 1px solid #F2F2F2;
    }
  }
  &__header{
    @include flex;
    padding: 0 24rpx;
    justify-content: space-between;
    border: none;
    &--hasline{
      position: relative;
      padding-left: 24rpx;
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
    &-left,
    &-right{
      height: 88rpx;
      line-height: 88rpx;
    }
    &-left{
      font-weight: bold;
      color: #333;
      font-size: 28rpx;
    }
    &-right{
      color: #999;
      font-size: 26rpx;
    }
  }
  &__body{
    background: #FFF;
    border-radius: $container-radius;
    padding: 24rpx;
  }
}
</style>