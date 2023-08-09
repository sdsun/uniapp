<template>
	<view class="container">
    <view v-for="item in 100" :key="item">{{ item }}</view>
		<g-go-top :scrollTop="scrollTop"></g-go-top>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0
			}
		},
		onPageScroll(e) {
      this.scrollTop = e.scrollTop;
		}
	};
</script>
