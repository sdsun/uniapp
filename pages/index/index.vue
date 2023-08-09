<template>
	<view class="g-page-index">
		<g-qrcode data="11"></g-qrcode>
		<view class="clist" v-for="item in list" :key="item.id">
			<view class="clist__title">{{ item.name }}</view>
			<uni-list>
				<uni-list-item
					v-for="(nitem, nindex) in item.pages"
					:to="`/pages/${item.code}/${nitem}`"
					:title="nitem"
					:key="nindex"
					link
				/>
			</uni-list>
		</view>
		{{ value }}
		<view style="background: #FFF; padding: 24rpx;">
			<g-radio-group v-model="value">
				<g-radio value="1" label="男" disabled></g-radio>
				<g-radio value="2" label="女"></g-radio>
			</g-radio-group>
			<g-radio-group v-model="value" direction="row">
				<g-radio value="1" label="男" disabled>111</g-radio>
				<g-radio value="2" label="女"></g-radio>
			</g-radio-group>
			<g-radio-group v-model="value" direction="row-reverse">
				<g-radio value="1" label="男"></g-radio>
				<g-radio value="2" label="女"></g-radio>
			</g-radio-group>
			<g-radio-group v-model="value" direction="row-reverse">
				<g-radio value="1" label="男" isCheckMark disabled></g-radio>
				<g-radio value="2" label="女" isCheckMark></g-radio>
			</g-radio-group>
			{{ open }}
			<g-switch v-model="open" :scaleRatio=".6"></g-switch>
			<view>
				{{ value1 }}
			<g-checkbox-group v-model="value1" direction="row">
				<g-checkbox value="1" label="天" disabled>111</g-checkbox>
				<g-checkbox value="2" label="南"></g-checkbox>
				<g-checkbox value="3" label="地"></g-checkbox>
				<g-checkbox value="4" label="北"></g-checkbox>
			</g-checkbox-group>
			<g-checkbox-group v-model="value1" direction="row-reverse">
				<g-checkbox value="1" label="天" isCheckMark disabled>111</g-checkbox>
				<g-checkbox value="2" label="南" isCheckMark></g-checkbox>
				<g-checkbox value="3" label="地" isCheckMark></g-checkbox>
				<g-checkbox value="4" label="北" isCheckMark></g-checkbox>
			</g-checkbox-group>
			</view>
		</view>

		<uni-section title="表单校验" type="line">
			<view class="example">
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" border>
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput :inputBorder="false" v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput :inputBorder="false" v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍" name="introduction">
						<uni-easyinput :inputBorder="false" type="textarea" v-model="valiFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
				</uni-forms>
				<!-- 基础表单校验 -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" border>
					<uni-forms-item label="姓名" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="请输入姓名" />
					</uni-forms-item>
					<uni-forms-item label="年龄" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="请输入年龄" />
					</uni-forms-item>
					<uni-forms-item label="自我介绍" name="introduction">
						<uni-easyinput type="textarea" v-model="valiFormData.introduction" placeholder="请输入自我介绍" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('valiForm')">提交</button>
			</view>
		</uni-section>
		<view>
	</view>
	</view>
</template>

<script>
	import userMxins from '@/mixins/modules/user'
	import { getUserInfo } from '@/api/user'
	export default {
		name: "index",
		mixins: [userMxins],
		data() {
			return {
				loading: false,
				value: '1',
				value1: ['1','3'],
				open: true,
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: '年龄不能为空'
						}, {
							format: 'number',
							errorMessage: '年龄只能输入数字'
						}]
					}
				},
				valiFormData: {
					name: '',
					age: '',
					introduction: '',
				},
				list:[
					{
						id: 'Base',
						code: 'base',
						name: '基础组件',
						pages: [
							'button',
							'icon',
							'empty',
							'calendar',
							'steps',
							'tabs',
							'search-bar',
							'cell',
							'divider',
							'go-top',
							'popup',
							'action-sheet',
							'loading',
							'avatar',
							'result',
							'modal',
							'container',
							'filter-bar',
							'popover'
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
			getUserInfo().then(res => {
				console.log("🚀 ~ file: index.vue:81 ~ getUserInfo ~ res:", res)
			})
		},
		methods: {
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `校验通过`
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.g-page-index{
	padding: 24rpx;
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
