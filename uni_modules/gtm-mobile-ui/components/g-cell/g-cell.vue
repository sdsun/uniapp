<template>
  <view
    class="g-cell"
    :class="{
      'g-highlight': highlight,
      'borderbottom': hasBorderTop
    }"
    @tap="handleClick">
    <view class="g-cell__icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <g-icon :name="icon" :size="iconSize" :color="iconColor">
        </g-icon>
      </slot>
    </view>
    <view class="g-cell__content">
      <view class="g-cell__title" v-if="icon || $slots.title">
        <slot name="title">{{ title }}</slot>
      </view>
      <view class="g-cell__desc" v-if="label || $slots.desc">
        <slot name="desc">{{ desc }}</slot>
      </view>
    </view>
    <view class="g-cell__value" v-if="value || $slots.value">
      <slot name="value">{{ value }}</slot>
    </view>
    <view class="g-cell__arrow" v-if="arrow"></view>
  </view>
</template>

<script>
export default {
  name: "g-list-cell",
  emits: ['click'],
  props: {
    padding: {
      type: Array,
      default() {
        return []
      }
    },
    //margin-top 单位rpx
    marginTop: {
      type: [Number, String],
      default: 0
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 32
    },
    iconColor: {
      type: String,
      default: '#333'
    },
    title: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    highlight: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: Boolean,
      default: false
    },
    hasBorderTop: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick(item) {
      this.$emit('click', item);
    }
  }
}
</script>

<style lang="scss" scoped>
.g-cell {
  position: relative;
  @include flex;
  align-items: center;
  padding: 24rpx;

  &__icon {
    margin-right: 20rpx;
  }

  &__content {
    flex: 1;
  }

  &__title {
    font-size: 28rpx;
    color: #333;
  }

  &__desc {
    margin-top: 12rpx;
    font-size: 24rpx;
    color: #999;
  }

  &__value {
    font-size: 24rpx;
    color: #999;
  }

  &__arrow {
    height: 40rpx;
    width: 40rpx;
    border-width: 3px 3px 0 0;
    border-style: solid;
    transform: rotate(45deg) scale(0.5);
    border-color: #CCC;
    border-radius: 4rpx;
    flex-shrink: 0;
    margin-left: auto;
    box-sizing: border-box;
    transform-origin: center center;
    margin-right: -6rpx;
  }

  &.borderbottom {
    &::after {
      content: '';
      height: 1px;
      position: absolute;
      background: #F5F5F5;
      bottom: -1px;
      right: 0;
      left: 0;
    }
  }
  &.g-highlight:active {
    background: rgba(0, 0, 0, 0.1);
  }
}

</style>