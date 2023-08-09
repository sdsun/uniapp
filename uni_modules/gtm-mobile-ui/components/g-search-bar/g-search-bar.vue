<template>
	<view class="g-searchbar">
		<view
			:style="{
				borderRadius:radius+'rpx',
				backgroundColor: bgColor
			}"
			class="g-searchbar__box">
			<view class="g-searchbar__box-icon-search">
				<slot name="searchIcon">
					<g-icon color="#c0c4cc" :size="36" name="search" />
				</slot>
			</view>
			<input
				class="g-searchbar__box-search-input"
				confirm-type="search"
				type="text"
				v-model="searchVal"
				:focus="showSync"
				:disabled="readonly"
				:placeholder="placeholderText"
				:maxlength="maxlength"
				@confirm="confirm"
				@blur="blur"
				@focus="emitFocus" />
			<view
				v-if="searchVal"
				class="g-searchbar__box-icon-clear"
				@click="clear">
				<slot name="clearIcon">
					<g-icon color="#c0c4cc" :size="36" name="clear" />
				</slot>
			</view>
		</view>
		<text
			@click="confirm"
			v-if="showSearchBtn"
			class="g-searchbar__btn">
			{{searchText}}
		</text>
	</view>
</template>

<script>
	import messages from './i18n/index.js'
	import { initVueI18n } from '@dcloudio/uni-i18n'
	const { t } = initVueI18n(messages)

	export default {
		name: "g-search-bar",
		emits: ['input', 'clear', 'cancel', 'confirm', 'blur', 'focus'],
		props: {
			placeholder: {
				type: String,
				default: ""
			},
			radius: {
				type: [Number, String],
				default: 10
			},
			searchText: {
				type: String,
				default: "Search"
			},
			showSearchBtn: {
				type: Boolean,
				default: false
			},
			bgColor: {
				type: String,
				default: "#F8F8F8"
			},
			maxlength: {
				type: [Number, String],
				default: 100
			},
			value: {
				type: [Number, String],
				default: ""
			},
			modelValue: {
				type: [Number, String],
				default: ""
			},
			focus: {
				type: Boolean,
				default: false
			},
			readonly: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				showSync: false,
				searchVal: ''
			}
		},
		computed: {
			cancelTextI18n() {
				return this.searchText || t("g-search-bar.search")
			},
			placeholderText() {
				return this.placeholder || t("g-search-bar.placeholder")
			}
		},
		watch: {
			value: {
				immediate: true,
				handler(newVal) {
					this.searchVal = newVal
				}
			},
			searchVal(newVal) {
				this.$emit("input", newVal)
			}
		},
		methods: {
			clear() {
				this.$emit("clear", {
					value: this.searchVal
				})
				this.searchVal = ""
			},
			confirm() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.$emit("confirm", {
					value: this.searchVal
				})
			},
			blur() {
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
				this.$emit("blur", {
					value: this.searchVal
				})
			},
			emitFocus(e) {
				this.$emit("focus", e.detail)
			}
		}
	};
</script>

<style lang="scss" scoped>
	$g-searchbar-height: 66rpx;
	.g-searchbar{
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		position: relative;
		padding: 10px;
	
		&__box {
			/* #ifndef APP-NVUE */
			display: flex;
			box-sizing: border-box;
			/* #endif */
			overflow: hidden;
			position: relative;
			flex: 1;
			justify-content: center;
			flex-direction: row;
			align-items: center;
			height: $g-searchbar-height;
			padding: 5rpx 8rpx 5rpx 0;
		}
	
		&__box-icon-search {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			padding: 0 16rpx;
			justify-content: center;
			align-items: center;
			color: #B3B3B3;
		}
	
		&__box-search-input {
			flex: 1;
			font-size: 28rpx;
			color: #333;
		}
	
		&__box-icon-clear {
			align-items: center;
			line-height: 48rpx;
			padding-left: 16rpx;
			/* #ifdef H5 */
			cursor: pointer;
			/* #endif */
		}
	
		&__text-placeholder {
			font-size: 28rpx;
			color: #B3B3B3;
			margin-left: 5px;
		}
	
		&__btn {
			padding-left: 20rpx;
			line-height: $g-searchbar-height;
			font-size: 14px;
			color: #333333;
			/* #ifdef H5 */
			cursor: pointer;
			/* #endif */
		}
	}

</style>
