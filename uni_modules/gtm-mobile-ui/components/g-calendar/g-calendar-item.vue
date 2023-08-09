<template>
  <view
    class="g-calendar-item__weeks-box"
    :class="{
      'g-calendar-item--disable': weeks.disable,
      'g-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
      'g-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
      'g-calendar-item--before-checked': weeks.beforeMultiple,
      'g-calendar-item--multiple': weeks.multiple,
      'g-calendar-item--after-checked': weeks.afterMultiple
    }"
    @click="choiceDate(weeks)"
  >
    <view class="g-calendar-item__weeks-box-item">
      <text v-if="selected && weeks.extraInfo" class="g-calendar-item__weeks-box-circle"></text>
      <text
        class="g-calendar-item__weeks-box-text"
        :class="{
          'g-calendar-item--isDay-text': weeks.isDay,
          'g-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
          'g-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
          'g-calendar-item--before-checked': weeks.beforeMultiple,
          'g-calendar-item--multiple': weeks.multiple,
          'g-calendar-item--after-checked': weeks.afterMultiple,
          'g-calendar-item--disable': weeks.disable
        }"
        >{{ weeks.date }}</text
      >
      <text
        v-if="!lunar && !weeks.extraInfo && weeks.isDay"
        class="g-calendar-item__weeks-lunar-text"
        :class="{
          'g-calendar-item--isDay-text': weeks.isDay,
          'g-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
          'g-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
          'g-calendar-item--before-checked': weeks.beforeMultiple,
          'g-calendar-item--multiple': weeks.multiple,
          'g-calendar-item--after-checked': weeks.afterMultiple
        }"
        >today</text
      >
      <text
        v-if="lunar && !weeks.extraInfo"
        class="g-calendar-item__weeks-lunar-text"
        :class="{
          'g-calendar-item--isDay-text': weeks.isDay,
          'g-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
          'g-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
          'g-calendar-item--before-checked': weeks.beforeMultiple,
          'g-calendar-item--multiple': weeks.multiple,
          'g-calendar-item--after-checked': weeks.afterMultiple,
          'g-calendar-item--disable': weeks.disable
        }"
        >{{ weeks.isDay ? 'today' : weeks.lunar.IDayCn === "初一" ? weeks.lunar.IMonthCn : weeks.lunar.IDayCn }}</text
      >
      <text
        v-if="weeks.extraInfo && weeks.extraInfo.info"
        class="g-calendar-item__weeks-lunar-text"
        :class="{
          'g-calendar-item--extra': weeks.extraInfo.info,
          'g-calendar-item--isDay-text': weeks.isDay,
          'g-calendar-item--isDay': calendar.fullDate === weeks.fullDate && weeks.isDay,
          'g-calendar-item--checked': calendar.fullDate === weeks.fullDate && !weeks.isDay,
          'g-calendar-item--before-checked': weeks.beforeMultiple,
          'g-calendar-item--multiple': weeks.multiple,
          'g-calendar-item--after-checked': weeks.afterMultiple,
          'g-calendar-item--disable': weeks.disable
        }"
        >{{ weeks.extraInfo.info }}</text
      >
    </view>
  </view>
</template>

<script>
export default {
  emits: ["change"],
  props: {
    weeks: {
      type: Object,
      default() {
        return {};
      },
    },
    calendar: {
      type: Object,
      default: () => {
        return {};
      },
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      },
    },
    lunar: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    choiceDate(weeks) {
      this.$emit("change", weeks);
    }
  }
};
</script>

<style lang="scss" scoped>
$g-font-size-base: 28rpx;
$g-text-color: #333;
$g-font-size-sm: 24rpx;
$g-color-error: #e43d33;
$g-opacity-disabled: 0.3;
$g-text-color-disable: #c0c0c0;
$g-primary: #2979ff !default;
.g-calendar-item__weeks-box {
  flex: 1;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.g-calendar-item__weeks-box-text {
  font-size: 34rpx;
  color: $g-text-color;
	font-weight: bold;
}

.g-calendar-item__weeks-lunar-text {
  font-size: $g-font-size-sm;
  color: $g-text-color;
}

.g-calendar-item__weeks-box-item {
  position: relative;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100rpx;
  height: 100rpx;
}

.g-calendar-item__weeks-box-circle {
  position: absolute;
  top: 16rpx;
  right: 16rpx;
  width: 16rpx;
  height: 16rpx;
  border-radius: 8rpx;
  background-color: $g-color-error;
}

.g-calendar-item--disable {
  background-color: rgba(249, 249, 249, $g-opacity-disabled);
  color: $g-text-color-disable;
}

.g-calendar-item--isDay-text {
  color: $g-primary;
}

.g-calendar-item--isDay {
  background-color: $g-primary;
  opacity: 0.8;
  color: #fff;
}

.g-calendar-item--extra {
  color: $g-color-error;
  opacity: 0.8;
}

.g-calendar-item--checked {
  background-color: $g-primary;
  color: #fff;
  opacity: 0.8;
}

.g-calendar-item--multiple {
  background-color: $g-primary;
  color: #fff;
  opacity: 0.8;
}
.g-calendar-item--before-checked {
  background-color: #ff5a5f;
  color: #fff;
}
.g-calendar-item--after-checked {
  background-color: #ff5a5f;
  color: #fff;
}
</style>
