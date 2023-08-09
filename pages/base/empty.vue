<template>
  <view class="page-empty">
    <view v-for="item in list" :key="item">
    <g-empty :mode="item"></g-empty>
  </view>
  </view>
</template>

<script>
	export default {
		name: "base-empty",
    data() {
      return {
        list: ['data', 'message', 'approve', 'network', 'search', 'todo']
      }
    }
	}
</script>