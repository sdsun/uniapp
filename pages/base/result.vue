<template>
  <view class="page-result">
    <g-result
      v-for="item in list"
      :key="item.type"
      :type="item.type"
      :title="item.type"
      :desc="item.desc">
    </g-result>
  </view>
</template>
<script>

export default{
  name: 'pageReult',
  data() {
    return{
      list: [{
        type: 'success',
        title: '操作成功',
        desc: '内容详情可折行，\n建议不超过两行建议不超过两行建议不超过两行'
      },{
        type: 'fail',
        title: '操作失败',
        desc: '内容详情可折行，\n建议不超过两行建议不超过两行建议不超过两行'
      },{
        type: 'warning',
        title: '警告',
        desc: '内容详情可折行，\n建议不超过两行建议不超过两行建议不超过两行'
      },
      {
        type: 'info',
        title: '提示信息',
        desc: '内容详情可折行，\n建议不超过两行建议不超过两行建议不超过两行'
      },
      {
        type: 'wait',
        title: '等待',
        desc: '内容详情可折行，\n建议不超过两行建议不超过两行建议不超过两行'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
page{
  padding: 24rpx;
  background: #F5F5F5;
}
</style>