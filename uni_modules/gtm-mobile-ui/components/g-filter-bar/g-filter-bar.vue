<template>
  <view
    class="g-filter-bar"
    :class="{ 'g-filter-bar__sticky':isSticky }"
    :style="{
			top: isSticky ? top + 'px' : 'auto'
		}">
    <view class="g-filter-bar__items">
      <view
        class="g-filter-bar__item"
        :class="{ 'g-filter-bar--current': current == item.key }"
        :style="{
          height: `${barHeight}rpx`,
          lineHeight: `${barHeight}rpx`
        }"
        v-for="item in list"
        :key="item.key"
        @click="handleChange(item)">
        <text style="margin-right: 5px;">{{ item.value }}</text>
        <g-icon
          class="g-filter-bar--filter"
          name="filter"
          v-if="item.type === 'filter'">
        </g-icon>
        <g-icon
          class="g-filter-bar--drop"
          name="down"
          v-if="item.type === 'drop'">
        </g-icon>
        <slot name="icon"></slot>
      </view>
    </view>
    <view
      class="g-filter-bar__drop"
      :class="{ 'is-dropdown': current && type === 'drop' }">
      <slot></slot>
    </view>
  </view>
</template>
<script>
export default{
  name: "gFilterBar",
  emits: ['change'],
  props: {
    // 列表
    list: {
      type: Array,
      default: () => []
    },
    barHeight: {
      type: Number,
      default: 88,
    },
    // 是否吸顶
    isSticky: {
      type: Boolean,
      default: false
    },
    // #ifndef H5
    top: {
      type: [Number, String],
      default: 0
    },
    // #endif
    // #ifdef H5
    top: {
      type: [Number, String],
      default: 44
    },
    // #endif
  },
  data() {
    return {
      current: '',
      type: ''
    }
  },
  methods: {
    // 切换筛选ITEM
    handleChange({key, type}) {
      this.type = type
      if (key === this.current && type === 'drop') {
        this.current = this.current ? '' : key
      } else {
        this.current = key
      }
      this.$emit('change', this.current)
    }
  }
}
</script>
<style lang="scss" scoped>
.g-filter-bar{
  background: #FFF;
  position: relative;
  &__sticky{
    position: sticky;
    left: 0;
    top: 0;
  }
  &__items{
    @include flex;
  }

  &__item{
    @include flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 28rpx;
  }
  &--drop{
    transition: all .3s;
  }
  &--current{
    .g-filter-bar--drop{
      transform: rotate(180deg);
    }
  }
  &__drop{
    left: 0;
    width: 100%;
    max-height: 0;
    transition: max-height .3s;
    background: #FFF;
    overflow-y: hidden;
    &.is-dropdown{
      max-height: 400rpx;
      overflow-y: scroll;
      padding: 24rpx;
      box-sizing: border-box;
      box-shadow: 0 50rpx 34rpx rgba(103, 103, 103, 0.1);
    }
  }
}
</style>
