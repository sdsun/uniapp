<template>
  <view class="page-filter-bar">
    <g-filter-bar :list="list" @change="handleChange">
      <view v-if="key == '001'">
        001
      </view>
      <view v-if="key == '002'">
        002
      </view>
      <view v-if="key == '003'">
        003
      </view>
    </g-filter-bar>
    <g-popup
      ref="popup"
      background-color="#fff">
      <view
        class="popup-content"
        style="width: 600rpx;">
        筛选内容
      </view>
    </g-popup>
  </view>
</template>
<script>
export default{
  name: "pageFilterBar",
  data() {
    return {
      key: '',
      list: [{
        key: '001',
        value: '综合',
        type: 'drop'
      },{
        key: '002',
        value: '销量',
        type: 'drop'
      },{
        key: '003',
        value: '价格',
        type: 'drop'
      },{
        key: '004',
        value: '筛选',
        type: 'filter'
      }]
    }
  },
  methods: {
    handleChange(v) {
      this.key = v
      if (v === '004') {
        this.$refs.popup.open('right')
      }
    }
  }
}
</script>