<template>
	<view class="container">
		<g-button
			type="primary"
			@click="handleOpen">
			Open
		</g-button>
		<g-action-sheet
			title="请选择你要进行的操作"
			:visible="visible"
			:actions="actions"
			@changeVisbile="(v) => visible = v"
			@onAction="handleAction">
		</g-action-sheet>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				actions: [
					{
						text: '复制',
						key: 'copy',
						desc: '描述',
						disabled: true
					},
					{
						text: '修改',
						key: 'modify',
					},
					{
						text: '退出登录',
						key: 'logout',
						danger: true
					}
				]
			}
		},
		methods: {
			// 打开面板
			handleOpen() {
				this.visible = true
			},
			// 点击action item
			handleAction(item) {
				console.log(item)
			}
		}
	}
</script>
<style lang="scss">
page{
	padding: 24rpx;
}
</style>
