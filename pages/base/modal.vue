<template>
	<view class="container">
		<g-button
			type="primary"
			@click="handleOpen">
			Open
		</g-button>
		<g-modal
			title="标题"
			content="确认删除词条记录吗?"
			type="focus"
			v-model="visible"
			:maskClosable="false"
			@confirm="handleConfirm"
			@cancel="handleCancel"
		>
		</g-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visible: true
			}
		},
		methods: {
			moveHandle() {
				return false
			},
			// 打开面板
			handleOpen() {
				this.visible = true
			},
			// 点击了确认按钮
			handleConfirm() {
				console.log('confirm')
			},
			// 点击了取消按钮
			handleCancel() {
				console.log('cancel')
			}
		}
	}
</script>
<style lang="scss">
page{
	padding: 24rpx;
}
</style>
