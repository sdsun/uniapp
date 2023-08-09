<template>
  <view class="page-steps">
    <view class="page-steps__item">
      <view style="margin-bottom: 10px;">竖向排列</view>
      <g-steps :current="current" direction="column">
        <g-steps-item title="已下单" desc="10:30"></g-steps-item>
        <g-steps-item title="已出库" desc="10:35"></g-steps-item>
        <g-steps-item title="已出库" desc="10:35"></g-steps-item>
      </g-steps>
    </view>
    <view class="page-steps__item">
      <view style="margin-bottom: 10px;">横向排列</view>
      <g-steps :current="current">
        <g-steps-item title="已下单" desc="10:30"></g-steps-item>
        <g-steps-item title="已出库" desc="10:35"></g-steps-item>
        <g-steps-item title="已出库" desc="10:35"></g-steps-item>
      </g-steps>
    </view>
    <view class="page-steps__item">
      <view style="margin-bottom: 10px;">业务组件-审批</view>
      <g-approve
        :list="list"
        :current="current"
        @remind="handleRemind"
      />
    </view>
    <g-button @click="handleChange">change current</g-button>
  </view>
</template>
<script>
	export default {
		name: "page-steps",
    data() {
      return {
        current: 1,
        list: [
          {
            id: 10000,
            title: 'Submiter',
            time: '2023-10-21',
            status: 'Pass',
            approvedCount: 2,
            children: [
              {
                id: 10001,
                user: 'jim',
                userCode: '210000',
                comment: 'desc',
                identity: 'admin',
                time: '2023-10-21',
                status: 'Pass',
              },
              {
                id: 10002,
                user: 'jim',
                userCode: '210000',
                comment: 'desc',
                identity: 'admin',
                time: '2023-10-21',
                status: 'Reject',
              }
            ]
          },
          {
            id: 20000,
            title: 'HR Approve',
            time: '2023-10-21',
            status: 'Pass',
            approvedCount: 2,
            children: []
          }
        ]
      }
    },
    methods: {
      handleRemind(item) {
        console.log(item)
      },
      handleChange() {
        if (this.current < 2) {
          this.current ++
        } else {
          this.current = 0
        }
      }
    }
	}
</script>
<style lang="scss" scoped>
.page-steps{
  &__item{
    background: #FFF;
    margin-bottom: 24rpx;
    padding: 24rpx;
  }
}
</style>