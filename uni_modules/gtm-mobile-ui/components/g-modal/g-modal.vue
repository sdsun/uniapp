<template>
  <g-popup
    ref="popup"
    :isMaskClick="maskClosable"
    @change="handleChange">
    <view class="g-modal">
      <view class="g-modal__title" v-if="title">{{ title }}</view>
      <view class="g-modal__body">
        <slot name="content">{{ content }}</slot>
      </view>
      <view class="g-modal__footer">
        <slot name="footer">
          <view
            class="g-modal__btns"
            :class="{
              'g-modal--isfocus': type === 'focus'
            }">
            <view
              class="g-modal__btns-item g-info"
              @tap.stop="handleCancel"
              v-if="cancelButtonVisible">
              {{ cancelButtonText }}
            </view>
            <view
              class="g-modal__btns-item g-primary"
              @tap.stop="handleConfirm">
              {{ primaryButtonText }}
            </view>
          </view>
        </slot>
      </view>
    </view>
  </g-popup>
</template>
<script>
export default{
  name: 'gModal',
  emits: ['confirm','cancel'],
  model: {
    prop: 'visible',
    event: 'changeVisbile'
  },
  props: {
    // type	类型，可选default(默认) focus(强调模式)
    type: {
      type: String,
      default: 'default'
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 内容
    content: {
      type: String,
      default: ''
    },
    // 是否隐藏模态框
    visible: {
      type: Boolean,
      default: true
    },
    // 主操作文案
    primaryButtonText: {
      type: String,
      default: 'Confirm'
    },
    // 取消按钮
    cancelButtonText: {
      type: String,
      default: 'Cancel'
    },
    // 是否显示取消按钮
    cancelButtonVisible: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible(n){
      this.handleVisible(n)
		}
  },
  mounted() {
    this.handleVisible(this.visible)
  },
  methods: {
    handleVisible(val) {
      val ? this.$refs.popup.open('center') : this.$refs.popup.close()
    },
    handleCancel() {
      this.$refs.popup.close()
      this.$emit('cancel')
    },
    handleConfirm() {
      this.$refs.popup.close()
      this.$emit('confirm')
    },
    handleChange(e) {
      this.$emit('changeVisbile', e.show)
    }
  }
}
</script>
<style lang="scss" scoped>
.g-modal{
  background: #FFF;
  border-radius: 12rpx;
  overflow: hidden;
  width: 600rpx;
  padding-top: 32rpx;
  &__title{
    font-size: 28rpx;
    color: #333;
    padding: 0 24rpx 24rpx 24rpx;
    background: #FFF;
    text-align: center;
    font-weight: bold;
  }
  &__body{
    padding: 0 24rpx 24rpx 24rpx;
    font-size: 24rpx;
    color: #333;
    line-height: 160%;
    text-align: center;
  }
  &__btns{
    border-top: 1px solid #F5F5F5;
    overflow: hidden;
    @include flex;
    &-item{
      flex: 1;
      text-align: center;
      height: 78rpx;
      line-height: 78rpx;
      padding: 0 12rpx;
      border-left: 1px solid #F5F5F5;
      font-size: 28rpx;
    }
    &.g-modal--isfocus{
      flex-direction: column;
      .g-modal__btns-item{
        border-left: none;
        border-top: 1px solid #F5F5F5;
        margin-top: -1px;
      }
    }
  }
}
</style>