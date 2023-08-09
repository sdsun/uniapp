<template>
	<view class="g-page-index">
		<view class="gtm-ui-desc">
			<text>GTM UI组件示例</text>
		</view>
		<view class="clist" v-for="item in list" :key="item.id">
			<view class="clist__title">{{ item.name }}</view>
			<uni-list>
				<uni-list-item
					v-for="(nitem, nindex) in item.pages"
					:to="`/pages/${item.code}/${nitem}`"
					:title="nitem"
					:key="nindex" />
			</uni-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						id: 'Base',
						code: 'base',
						name: '基础组件',
						pages: [
							'button',
							'icon',
							'empty'
						]
					},
					{
						id: 'Form',
						code: 'from',
						name: '表单组件',
						pages: [
							'form'
						]
					},
					{
						id: 'Form',
						code: 'base',
						name: '操作反馈',
						pages: [
							'dialog',
							'toast'
						]
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
.g-page-index{
	padding: 24rpx;
	.gtm-ui-desc{
		padding: 24px;
		color: #666;
		margin-bottom: 24rpx;
		font-size: 24rpx;
		text-align: center;
		line-height: 160%;
	}
	.clist{
		background: #FFF;
		margin-bottom: 24rpx;
		border-radius: 12rpx;
		overflow: hidden;
		.clist__title{
			padding: 15px;
			font-weight: bold;
			font-size: 30rpx;
		}
	}
}
</style>
