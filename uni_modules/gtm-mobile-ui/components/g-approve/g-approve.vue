<template>
  <view class="g-approve">
    <g-steps :current="current" direction="column" dot>
      <g-steps-item v-for="(item, index) in list" :key="index">
        <template #desc>
          <view class="g-approve__title">
            <view>
              <text style="margin-right: 5px;">{{ item.title }}</text>
              <text v-if="item.children.length >0">
                ({{item.approvedCount}}/{{ item.children.length }})
              </text>
            </view>
            <view>
              <g-button
                type="primary"
                size="small"
                shape="circle"
                plain
                hairline
                @click="handleRemind(item)"
              >
                Remind
              </g-button>
            </view>
          </view>
          <view v-if="item.children.length > 0">
            <view
              v-for="(subitem, subindex) in item.children"
              :key="subindex"
              class="g-approve__sub">
              <view class="g-approve__sub-title">
                <text
                  :class="[
                    'g-approve__sub-status',
                    {
                      'g-error': subitem.status === 'Reject',
                      'g-success': subitem.status === 'Pass'
                    }
                  ]"
                >
                  {{ subitem.status }}
                </text>
                <text class="g-approve__sub-time">{{subitem.time}}</text>
              </view>
              <view class="g-approve__sub-user">
                <text>{{ subitem.user }}</text>
                <text>({{ subitem.userCode }})</text>
              </view>
              <view class="g-approve__sub-identity" v-if="subitem.identity">
                <text class="g-approve__sub-identity__tag">{{ subitem.identity }}</text>
              </view>
              <view class="g-approve__sub-comments" v-if="subitem.comment">
                <text>Comment: {{ subitem.comment }}</text>
              </view>
            </view>
          </view>
        </template>
      </g-steps-item>
    </g-steps>
  </view>
</template>
<script>
export default {
  name: "g-approve",
  emits: ['remind'],
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    current: {
      type: Number,
      default: 0
    }
  },
  methods: {
    // 流程催办
    handleRemind(item) {
      this.$emit("remind", item);
    }
  }
}
</script>
<style lang="scss" scoped>
.g-approve{
  &__title{
    font-size: 28rpx;
    color: #333;
    font-weight: bold;
    margin-bottom: 12rpx;
    @include flex;
    justify-content: space-between;
    align-items: center;
    height: 40rpx;
    line-height: 40rpx;
  }
  &__sub{
    padding: 12rpx 0;
    line-height: 160%;
    margin-bottom: 12rpx;
    &-title{
      margin-bottom: 12rpx;
    }
    &-status{
      font-size: 26rpx;
      position: relative;
      margin-right: 12rpx;
      &::before{
        content: '';
        display: block;
        width: 16rpx;
        height: 16rpx;
        background: #999;
        position: absolute;
        left: -31rpx;
        top: 12rpx;
        box-shadow: 0 0 0 6rpx #EEE;
        border-radius: 8rpx;
      }
      &.g-success{
        &::before{
          background: $g-success;
          box-shadow: 0 0 0 6rpx $g-success-light;
        }
      }
      &.g-error{
        &::before{
          background: $g-error;
          box-shadow: 0 0 0 6rpx $g-error-light;
        }
      }
    }
    &-time{
      font-size: 24rpx;
      color: #999;
    }
    &-user{
      font-size: 26rpx;
      margin-bottom: 12rpx;
    }
    &-identity{
      font-size: 24rpx;
      margin-bottom: 12rpx;
      &__tag{
        background: rgb(230, 238, 255);
        color: $g-primary;
        padding: 3rpx 12rpx;
        display: inline-block;
        border-radius: 5rpx;
      }
    }
    &-comments{
      font-size: 24rpx;
      color: #999;
    }
  }
}
</style>