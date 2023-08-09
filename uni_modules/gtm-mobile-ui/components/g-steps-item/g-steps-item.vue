<template>
	<view
		class="g-steps-item"
		ref="g-steps-item"
		:class="[`g-steps-item--${parentData.direction}`]">
		<view
			class="g-steps-item__line"
			v-if="index + 1 < childLength"
			:class="[`g-steps-item__line--${parentData.direction}`]"
			:style="[lineStyle]">
		</view>
		<view class="g-steps-item__wrapper"
			:class="[
				`g-steps-item__wrapper--${parentData.direction}`,
				parentData.dot && `g-steps-item__wrapper--${parentData.direction}--dot`
			]">
			<slot name="icon">
				<view
					class="g-steps-item__wrapper__dot"
					v-if="parentData.dot" :style="{
					backgroundColor: statusColor
				}">
				</view>
				<view
					class="g-steps-item__wrapper__icon"
					v-else-if="parentData.activeIcon || parentData.inactiveIcon">
					<g-icon
						:name="index <= parentData.current ? parentData.activeIcon : parentData.inactiveIcon"
						:size="iconSize"
						:color="index <= parentData.current ? parentData.activeColor : parentData.inactiveColor">
					</g-icon>
				</view>
				<view
					v-else
					:style="{
						backgroundColor: statusClass === 'process' ? parentData.activeColor : 'transparent',
						borderColor: statusColor
					}"
					class="g-steps-item__wrapper__circle">
					<text
						v-if="statusClass === 'process' || statusClass === 'wait'"
						class="g-steps-item__wrapper__circle__text"
						:style="{
							color: index == parentData.current ? '#ffffff' : parentData.inactiveColor
						}">
							{{ index + 1 }}
						</text>
					<g-icon
						v-else
						:color="statusClass === 'error' ? 'error' : parentData.activeColor"
						:name="statusClass === 'error' ? 'error' : 'success'">
					</g-icon>
				</view>
			</slot>
		</view>
		<view
			class="g-steps-item__content"
			:class="[`g-steps-item__content--${parentData.direction}`]"
			:style="[contentStyle]">
			<text>{{ title }}</text>
			<slot name="desc">
				<text>{{ desc }}</text>
			</slot>
		</view>
	</view>
</template>

<script>
import props from './props.js';
// #ifdef APP-NVUE
const dom = uni.requireNativePlugin('dom')
// #endif
/**
 * StepsItem 步骤条的子组件
 * @property {String}			title			标题文字
 * @property {String}			current			描述文本
 * @property {String | Number}	iconSize		图标大小  (默认 17 )
 * @property {Boolean}			error			当前步骤是否处于失败状态  (默认 false )
 */
export default {
	name: 'g-steps-item',
	mixins: [uni.$g.mpMixin, uni.$g.mixin, props],
	data() {
		return {
			index: 0,
			childLength: 0,
			showLine: false,
			size: {
				height: 0,
				width: 0
			},
			parentData: {
				direction: 'row',
				current: 0,
				activeColor: '',
				inactiveColor: '',
				activeIcon: '',
				inactiveIcon: '',
				dot: false
			}
		}
	},
	created() {
		this.init()
	},
	computed: {
		lineStyle() {
			const style = {}
			if (this.parentData.direction === 'row') {
				style.width = this.size.width + 'px'
				style.left = this.size.width / 2 + 'px'
			} else {
				style.height = '100%'
			}
			style.backgroundColor = this.parent.children?.[this.index + 1]?.error ? uni.$g.color.error : this.index <
				this
					.parentData
					.current ? this.parentData.activeColor : this.parentData.inactiveColor
			return style
		},
		statusClass() {
			const {
				index,
				error
			} = this
			const {
				current
			} = this.parentData
			if (current == index) {
				return error === true ? 'error' : 'process'
			} else if (error) {
				return 'error'
			} else if (current > index) {
				return 'finish'
			} else {
				return 'wait'
			}
		},
		statusColor() {
			let color = ''
			switch (this.statusClass) {
				case 'finish':
					color = this.parentData.activeColor
					break
				case 'error':
					color = uni.$g.color.error
					break
				case 'process':
					color = this.parentData.dot ? this.parentData.activeColor : 'transparent'
					break
				default:
					color = this.parentData.inactiveColor
					break
			}
			return color
		},
		contentStyle() {
			const style = {}
			if (this.parentData.direction === 'column') {
				style.marginLeft = this.parentData.dot ? '4rpx' : '12rpx'
				style.marginTop = this.parentData.dot ? '0px' : '12rpx'
			} else {
				style.marginTop = this.parentData.dot ? '4rpx' : '12rpx'
				style.marginLeft = this.parentData.dot ? '4rpx' : '12rpx'
			}

			return style
		}
	},
	mounted() {
		this.parent && this.parent.updateFromChild()
		uni.$g.sleep().then(() => {
			this.getStepsItemRect()
		})
	},
	methods: {
		init() {
			// 初始化数据
			this.updateParentData()
			if (!this.parent) {
				return uni.$g.error('g-steps-item必须要搭配g-steps组件使用')
			}
			this.index = this.parent.children.indexOf(this)
			this.childLength = this.parent.children.length
		},
		updateParentData() {
			// 此方法在mixin中
			this.getParentData('g-steps')
		},
		// 父组件数据发生变化
		updateFromParent() {
			this.init()
		},
		// 获取组件的尺寸，用于设置横线的位置
		getStepsItemRect() {
			// #ifndef APP-NVUE
			this.$uGetRect('.g-steps-item').then(size => {
				this.size = size
			})
			// #endif

			// #ifdef APP-NVUE
			dom.getComponentRect(this.$refs['g-steps-item'], res => {
				const {
					size
				} = res
				this.size = size
			})
			// #endif
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../libs/css/components.scss";

.g-steps-item {
	flex: 1;
	@include flex;

	&--row {
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	&--column {
		position: relative;
		flex-direction: row;
		justify-content: flex-start;
		padding-bottom: 10rpx;
	}

	&__wrapper {
		@include flex;
		justify-content: center;
		align-items: center;
		position: relative;
		background-color: #fff;

		&--column {
			width: 40rpx;
			height: 64rpx;

			&--dot {
				height: 40rpx;
				width: 40rpx;
			}
		}

		&--row {
			width: 64rpx;
			height: 40rpx;

			&--dot {
				width: 40rpx;
				height: 40rpx;
			}
		}

		&__circle {
			width: 40rpx;
			height: 40rpx;
			/* #ifndef APP-NVUE */
			box-sizing: border-box;
			flex-shrink: 0;
			/* #endif */
			border-radius: 200rpx;
			border-width: 1px;
			border-color: $g-tips-color;
			border-style: solid;
			@include flex(row);
			align-items: center;
			justify-content: center;
			transition: background-color 0.3s;

			&__text {
				color: $g-tips-color;
				font-size: 22rpx;
				@include flex(row);
				align-items: center;
				justify-content: center;
				text-align: center;
				line-height: 22rpx;
			}
		}

		&__dot {
			width: 20rpx;
			height: 20rpx;
			border-radius: 200rpx;
			background-color: $g-content-color;
			border: 3px solid rgb(194, 214, 255);
		}
	}

	&__content {
		@include flex;
		flex: 1;

		&--row {
			flex-direction: column;
			align-items: center;
		}

		&--column {
			flex-direction: column;
			margin-left: 12rpx;
		}
	}

	&__line {
		position: absolute;
		background: $g-tips-color;

		&--row {
			top: 20rpx;
			height: 1px;
		}

		&--column {
			width: 1px;
			left: 20rpx;
		}
	}
}
</style>
