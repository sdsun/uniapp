<template>
	<view
		:class="[
			'g-checkbox-wrap',
			`g-checkbox-wrap--${direction}`
		]"
		@tap.stop="itemClick">
		<view class="g-checkbox-wrap__inner">
			<view
				class="g-checkbox"
				:class="{
					'g-checkbox__disabled': disabled,
					'g-checkbox__color': val && !isCheckMark
				}"
				:style="{
					backgroundColor: getBackgroundColor(val, isCheckMark),
					borderColor: getBorderColor(val, isCheckMark),
					transform: `scale(${scaleRatio})`,
					borderRadius: borderRadius
				}"
				@tap.stop="checkboxChange"
			>
				<view
					v-if="val"
					class="g-checkbox__mark"
					:style="{
						borderBottomColor: getCheckMarkColor(isCheckMark),
						borderRightColor: getCheckMarkColor(isCheckMark)
					}"
				>
				</view>
				<checkbox
					class="g-checkbox__hidden"
					style="opacity: 0; position: absolute"
					:color="color"
					:disabled="disabled"
					:value="value"
					:checked="val">
				</checkbox>
			</view>
			<text
				v-if="label"
				class="g-checkbox__label"
				:class="{
					'g-checkbox__disabled': disabled
				}"
				:style="{
					clear: val ? '#3471ff' : '#333'
				}">
				{{ label }}
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "g-checkbox",
		emits: ['change'],
		props: {
			value: {
				type: String,
				default: ''
			},
			label: {
				type: String,
				default: ''
			},
			checked: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			//checkbox选中背景颜色
			color: {
				type: String,
				default: ''
			},
			//checkbox未选中时边框颜色
			borderColor: {
				type: String,
				default: '#ccc'
			},
			borderRadius: {
				type: String,
				default: '3px'
			},
			//是否只展示对号，无边框背景
			isCheckMark: {
				type: Boolean,
				default: false
			},
			scaleRatio: {
				type: [Number, String],
				default: 1
			}
		},
		created() {
			this.val = this.checked;
			this.group = this.getParent()
			if (this.group) {
				this.group.childrens.push(this);
				if (this.group.value && this.group.value.length > 0) {
					this.val = this.group.value.includes(this.value)
				}
				if (this.group.direction) {
					this.direction = this.group.direction
				}
			}
		},
		watch: {
			checked(newVal) {
				this.val = newVal;
			},
			val(newVal) {
				if (this.group) {
					this.group.changeValue()
				}
			}
		},
		data() {
			return {
				val: false,
				direction: 'inline'
			}
		},
		methods: {
			getCheckMarkColor(isCheckMark) {
				return isCheckMark ? '#3471ff' : '#FFF'
			},
			getBackgroundColor(val, isCheckMark) {
				let color = val ? this.color : '#fff'
				if (isCheckMark) {
					color = 'transparent'
				}
				return color
			},
			getBorderColor(val, isCheckMark) {
				let color = val ? this.color : this.borderColor
				if (isCheckMark) {
					color = 'transparent'
				}
				return color
			},
			checkboxChange(e) {
				if (this.disabled) return
				this.val = !this.val;
				this.$emit('change', {
					checked: this.val,
					value: this.value
				})
			},
			getParent(name = 'g-checkbox-group') {
				let parent = this.$parent;
				let parentName = parent.$options.name;
				while (parentName !== name) {
					parent = parent.$parent;
					if (!parent) return false;
					parentName = parent.$options.name;
				}
				return parent;
			},
			itemClick() {
				this.checkboxChange()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.g-checkbox-wrap{
		&__inner{
			@include flex;
			align-items: center;
		}
		&--inline{
			display: inline-flex;
			margin-right: 32rpx;
			margin-bottom: 24rpx;
		}
		&--row{
			padding: 24rpx 0;
			border-bottom: 1px solid #F5F5F5;
		}
		&--row-reverse{
			padding: 24rpx 0;
			border-bottom: 1px solid #F5F5F5;
			.g-checkbox-wrap__inner{
				flex-direction: row-reverse;
				justify-content: space-between;
			}
		}
	}
	.g-checkbox {
		font-size: 0;
		color: rgba(0, 0, 0, 0);
		width: 40rpx;
		height: 40rpx;
		border-width: 1px;
		border-style: solid;
		display: inline-flex;
		box-sizing: border-box;
		border-radius: 50%;
		vertical-align: top;
		flex-shrink: 0;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		position: relative;
		&__color{
			background: $g-primary;
			border-color: $g-primary;
		}
		&__mark{
			width: 20rpx;
			height: 40rpx;
			border-bottom-style: solid;
			border-bottom-width: 3px;
			border-bottom-color: #FFFFFF;
			border-right-style: solid;
			border-right-width: 3px;
			border-right-color: #FFFFFF;
			box-sizing: border-box;
			transform: rotate(45deg) scale(0.5) translateZ(0);
			transform-origin: 54% 48%;
		}
		&__label{
			margin-left: 12rpx;
			font-size: 26rpx;
			color: #333;
		}
		&__hidden{
			width: 100%;
			height: 100%;
			border: 0 none;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			pointer-events: none;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
		}
		&__disabled{
			opacity: 0.4;
		}
	}
</style>