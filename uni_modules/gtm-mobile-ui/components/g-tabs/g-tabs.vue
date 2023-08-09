<template>
	<view
		:class="['g-tabs',{
			'g-tabs__fixed':isFixed && !isSticky,
			'g-tabs__sticky':isSticky
		}]"
		:style="{
			background:background,
			zIndex:(isFixed || isSticky)?zIndex:1,
			top: isFixed || isSticky ? top + 'px' : 'auto'
		}">
		<scroll-view
			class="g-tabs__scrollbox"
			:scroll-with-animation="true"
			:scroll-x="scroll"
			:show-scrollbar="false"
			:scroll-into-view="scrollInto">
			<view
				class="g-scroll__view"
				:class="{
					'g-tabs__full':!alignLeft
				}">
				<view
					v-for="(tab, index) in vals"
					:id="tab.g_s_id"
					:key="index" class="g-tabs__item"
					:class="{
						'g-tabs__full':!alignLeft
					}"
					@tap="switchTab(index)">
					<view class="g-tabs__text-wrap"
						:class="{
							'g-tabs__wrap-disabled':tab.disabled,
							'g-tabs__item-column':direction==='column' && tab.icon
						}"
						:style="{height:height+'rpx'}">
						<view
							class="g-tabs__line-wrap"
							:class="{
								'g-tabs__line-center':center
							}"
							:style="{
								bottom:bottom +'rpx',
								left:`-${padding}rpx`,
								right:`-${padding}rpx`
							}"
							v-if="isSlider">
							<view class="g-tabs__ac-line"
								:class="{
									'g-tabs__line-short':short,
									'g-tabs__full':!short,
									'g-tabs__slider-color':!sliderBackground
								}"
								:style="{
									height:sliderHeight+'rpx',
									background:sliderBackground,
									borderRadius:sliderRadius==-1?sliderHeight+'rpx':sliderRadius+'rpx',
									transform: `scale(${tabIndex===index? scale:0 })`
								}">
							</view>
						</view>
						<image
							v-if="tab.icon"
							class="g-tabs__icon"
							:src="tabIndex===index && tab.selectedIcon?tab.selectedIcon:tab.icon">
						</image>
						<view
							class="g-tabs__text"
							:class="{
								'g-tabs__selected-color':!selectedColor && tabIndex===index,
								'g-tabs__text-color':!color && tabIndex!==index
							}"
							:style="{
								fontSize:(tabIndex === index ? selectedSize :size)+'rpx',
								color:tabIndex===index ? selectedColor : color,
								fontWeight:tabIndex===index?selectedFontWeight:fontWeight,
								transform:`scale(${tabIndex===index ? scale :1 })`
							}">
							{{tab.name}}
							<text
								:class="{
									'g-tabs__badge-color':!badgeBackground,
									'g-tabs__badge-dot':isDot,
									'g-tabs__badge':!isDot
								}"
								:style="{
									color:badgeColor,
									background:badgeBackground
								}"
								v-if="tab.badge">
								{{isDot?'':(tab.badge > 99 ? '99+' : tab.badge)}}
							</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="g-tabs__suffix" v-if="$slots.suffix" :style="{height:height+'rpx'}">
			<slot name="suffix" />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'g-tabs',
		emits: ['change'],
		props: {
			// 选项卡ITEMS
			tabs: {
				type: Array,
				default: () => []
			},
			// 当前选项卡
			current: {
				type: Number,
				default: 0
			},
			// 是否可以滚动
			scroll: {
				type: Boolean,
				default: false
			},
			// tab高度
			height: {
				type: [Number, String],
				default: 96
			},
			// 背景颜色
			background: {
				type: String,
				default: '#fff'
			},
			//字体大小
			size: {
				type: [Number, String],
				default: 26
			},
			color: {
				type: String,
				default: '#999'
			},
			//选中前字重
			fontWeight: {
				type: [Number, String],
				default: 'normal'
			},
			selectedSize: {
				type: [Number, String],
				default: 28
			},
			//选中后字体颜色
			selectedColor: {
				type: String,
				default: ''
			},
			//选中后字重 
			selectedFontWeight: {
				type: [Number, String],
				default: 500
			},
			scale: {
				type: [Number, String],
				default: 1.1
			},
			badgeColor: {
				type: String,
				default: '#fff'
			},
			badgeBackground: {
				type: String,
				default: ''
			},
			isDot: {
				type: Boolean,
				default: false
			},
			isSlider: {
				type: Boolean,
				default: true
			},
			//滑块高度
			sliderHeight: {
				type: [Number, String],
				default: 5
			},
			//滑块背景颜
			sliderBackground: {
				type: String,
				default: ''
			},
			//滑块 radius
			sliderRadius: {
				type: [Number, String],
				default: -1
			},
			//滑块左右padding值
			padding: {
				type: [Number, String],
				default: 0
			},
			//滑块bottom
			bottom: {
				type: [Number, String],
				default: 0
			},
			//滑块是否固定为较短的长度45rpx
			short: {
				type: Boolean,
				default: true
			},
			//滑块是否居中显示
			center: {
				type: Boolean,
				default: true
			},
			//是否固定
			isFixed: {
				type: Boolean,
				default: false
			},
			//吸顶效果，为true时isFixed失效
			isSticky: {
				type: Boolean,
				default: false
			},
			//isFixed或isSticky为true时，tabs top值 px
			// #ifndef H5
			top: {
				type: [Number, String],
				default: 0
			},
			// #endif
			// #ifdef H5
			top: {
				type: [Number, String],
				default: 44
			},
			// #endif
			alignLeft: {
				type: Boolean,
				default: false
			},
			//tabs item项排列方式：row、column
			direction: {
				type: String,
				default: 'row'
			},
			zIndex: {
				type: [Number, String],
				default: 996
			}
		},
		watch: {
			current(newVal, oldVal) {
				this.switchTab(newVal);
			}
		},
		created() {
			this.initData(this.tabs)
		},
		data() {
			return {
				vals: [],
				scrollInto: '',
				tabIndex: 0
			};
		},
		methods: {
			getId() {
				return `g_${Math.ceil(Math.random() * 10e5).toString(36)}`
			},
			initData(vals) {
				if (vals && vals.length > 0) {
					if (typeof vals[0] === 'object') {
						vals.map(item => {
							const scrollId = this.getId()
							item.g_s_id = scrollId;
						});
					} else {
						//字符串
						vals = vals.map(item => {
							const scrollId = this.getId()
							return {
								name: item,
								g_s_id: scrollId
							}
						})
					}
					this.vals = vals;
					this.$nextTick(() => {
						setTimeout(() => {
							this.switchTab(this.current)
						}, 50)
					})
				}
			},
			switchTab(index) {
				const item = {
					...this.vals[index]
				}
				if (this.tabIndex === index || item.disabled) return;
				this.tabIndex = index;
				let scrollIndex = index - 1 < 0 ? 0 : index - 1;
				this.scrollInto = this.vals[scrollIndex].g_s_id;
				this.$emit('change', {
					index: index,
					...item
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.g-scroll__view {
		min-width: 100%;
		white-space: nowrap;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.g-tabs{
		@include flex;
		align-items: center;
		&__suffix{
			padding:0 10px;
			@include flex;
			align-items: center;
			position: relative;
			&::after{
				position: absolute;
				height: 100%;
				width: 30rpx;
				top: 0;
				left: -30rpx;
				content: '';
				background: linear-gradient(270deg, #FFFFFF, hsla(0, 0%, 100%, 0));
				z-index: 8;
			}
		}
		&__scrollbox {
			width: 100%;
			flex: 1;
			flex-direction: row;
			overflow: hidden;
			position: relative;
		}
	
		&__fixed {
			position: fixed;
			left: 0;
			right: 0;
		}
	
		&__sticky {
			position: sticky;
			left: 0;
			right: 0;
		}
	
	
		&__item {
			/* #ifndef APP-NVUE */
			display: flex;
			flex-shrink: 0;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding-left: 32rpx;
			padding-right: 32rpx;
			position: relative;
	
		}
	
		&__full {
			flex: 1;
		}
	
		&__text-wrap {
			position: relative;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: center;
			/* #ifdef H5 */
			cursor: pointer;
			/* #endif */
			z-index: 3;
		}
	
		&__wrap-disabled {
			/* #ifdef H5 */
			cursor: not-allowed;
			/* #endif */
			opacity: 0.5;
		}
	
		&__icon {
			width: 40rpx;
			height: 40rpx;
			margin-right: 12rpx;
		}
	
		&__item-column {
			flex-direction: column !important;
		}
	
		&__icon-column {
			margin-right: 0 !important;
			margin-bottom: 8rpx;
		}
	
		&__text {
			/* #ifndef APP-NVUE */
			white-space: nowrap;
			display: block;
			transition: transform 0.2s linear;
			z-index: 3;
			/* #endif */
			/* #ifdef APP-NVUE */
			flex-wrap: nowrap;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			/* #endif */
			position: relative;
		}
	
		/* #ifdef APP-NVUE */
		&__text-nvue {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			text-align: center;
		}
	
		/* #endif */
	
		&__badge {
			height: 36rpx;
			padding: 0 12rpx;
			color: #FFFFFF;
			font-size: 24rpx;
			line-height: 36rpx;
			border-radius: 100px;
			position: absolute;
			/* #ifndef APP-NVUE */
			min-width: 36rpx !important;
			display: flex;
			box-sizing: border-box;
			right: -32rpx;
			top: -18rpx;
			z-index: 10;
			/* #endif */
			/* #ifdef APP-NVUE */
			right: 0;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: center;
			transform: scale(0.9);
		}
	
		&__badge-dot {
			height: 8px !important;
			width: 8px !important;
			/* #ifdef APP-NVUE */
			border-radius: 100px;
			/* #endif */
			position: absolute;
			/* #ifndef APP-NVUE */
			display: inline-block;
			right: -6px;
			top: -3px;
			border-radius: 50%;
			z-index: 10;
			/* #endif */
			/* #ifdef APP-NVUE */
			right: 0;
			/* #endif */
		}
	
		&__line-wrap {
			position: absolute;
			border-radius: 2px;
			z-index: 2;
			flex: 1;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
		}
	
		&__line-center {
			justify-content: center;
			left: 0;
		}
	
		&__ac-line {
			transition: transform 0.2s linear;
		}
	
		&__line-short {
			width: 45rpx !important;
		}
	
		/* #ifndef APP-NVUE */
		&__selected-color {
			color: $g-primary;
		}
	
		&__text-color {
			color: $g-info-dark;
		}
	
		&__slider-color {
			background: $g-primary;
		}
	
		&__badge-color {
			background: $g-error;
		}
	
		/* #endif */
	}
</style>