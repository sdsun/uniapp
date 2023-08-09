<template>
  <g-popup ref="popup" @change="handleChange">
    <view class="g-action-sheet">
      <view class="g-action-sheet__title">{{ title }}</view>
      <view class="g-action-sheet__body">
        <view
          class="g-action-sheet__item"
          :class="{
            'g-action-sheet__item--disabled': item.disabled,
            'g-action-sheet__item--danger': item.danger
          }"
          v-for="(item, index) in actions"
          :key="index"
          @tap.stop="handleAction(item)">
          <view class="g-action-sheet__item_text">{{ item.text }}</view>
          <view class="g-action-sheet__item_desc" v-if="item.desc">{{ item.desc }}</view>
        </view>
      </view>
      <view v-if="cancelVisible" class="g-action-sheet__cancel" @tap.stop="handleCancel">
        {{ cancelText }}
      </view>
    </view>
  </g-popup>
</template>
<script>
export default{
  name: 'gActionSheet',
  emits: ['onAction', 'changeVisbile'],
  props: {
    // 面板选项列表
    actions: {
      type: Array,
      default: () => []
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 是否隐藏
    visible: {
      type: Boolean,
      default: false
    },
    // 取消按钮
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    // 是否显示取消按钮
    cancelVisible: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible: {
			handler: function (val) {
        this.$nextTick(() => {
          const popupInstance = this.$refs.popup
          val ? popupInstance.open('bottom') : popupInstance.close()
        })
			},
			immediate: true
		}
  },
  methods: {
    handleAction(item) {
      if(item.disabled) return
      this.$refs.popup.close()
      this.$emit('onAction', item)
    },
    handleCancel() {
      this.$refs.popup.close()
    },
    handleChange(e) {
      this.$emit('changeVisbile', e.show)
    }
  }
}
</script>
<style lang="scss" scoped>
$action-item-padding: 24rpx;
.g-action-sheet{
  background: #F5F5F5;
  border-radius: 24rpx 24rpx 0 0;
  text-align: center;
  overflow: hidden;
  &__title{
    font-size: 24rpx;
    color: #999;
    padding: $action-item-padding;
    background: #FFF;
  }
  &__item{
    padding: $action-item-padding;
    border-top: 1px solid #F5F5F5;
    background: #FFF;
    &_text{
      color: #333;
      font-size: 28rpx;
    }
    &_desc{
      color: #999;
      font-size: 24rpx;
      margin-top: 12rpx;
    }
    &--disabled{
      .g-action-sheet__item_text,
      .g-action-sheet__item_desc{
        color: #CCC;
      }
    }
    &--danger{
      .g-action-sheet__item_text{
        color: $g-error;
      }
    }
  }
  &__cancel{
    font-size: 28rpx;
    padding: 24rpx 0 46rpx 0;
    margin-top: 12rpx;
    background: #FFF;
  }
}
</style>