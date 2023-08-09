<template>
	<view
    class="g-section"
    :style="{
      margin:margin,
      background:background,
      padding:padding
    }">
		<view
      class="g-section__title"
      @tap="handleClick">
			<view
        class="g-section__decorate"
        v-if="isLine"
				:style="{
          background:getLineColor,
          width:lineWidth+'rpx',
          left:`-${lineRight}rpx`,
          top:lineGap+'rpx',
          bottom:lineGap+'rpx',
          borderRadius:lineCap==='circle'?`${lineWidth}rpx`:0
        }">
			</view>
			<slot name="left"></slot>
			<text
        :style="{
          fontSize:size+'rpx',
          color:color,
          fontWeight:fontWeight
        }"
        v-if="title">
        {{title}}
      </text>
			<slot></slot>
		</view>
		<view
      class="g-section__sub"
      :style="{paddingTop:descrTop+'rpx'}"
      v-if="descr"
    >
			<text
        class="g-section__descr"
        :style="{
          fontSize:descrSize+'rpx',
          color:descrColor
        }">
        {{descr}}
      </text>
		</view>
		<slot name="descr"></slot>
	</view>
</template>

<script>
	export default {
		name: "gSection",
		emits: ['click'],
		props: {
			title: {
				type: String,
				default: ''
			},
			size: {
				type: [Number, String],
				default: 32
			},
			color: {
				type: String,
				default: '#333'
			},
			fontWeight: {
				type: [Number, String],
				default: 400
			},
			descr: {
				type: String,
				default: ''
			},
			descrSize: {
				type: [Number, String],
				default: 24
			},
			descrColor: {
				type: String,
				default: '#7a7a7a'
			},
			descrTop: {
				type: [Number, String],
				default: 16
			},
			isLine: {
				type: Boolean,
				default: false
			},
			lineWidth: {
				type: [Number, String],
				default: 8
			},
			lineColor: {
				type: String,
				default: ''
			},
			lineCap: {
				type: String,
				default: 'circle'
			},
			lineRight: {
				type: [Number, String],
				default: 16
			},
			lineGap: {
				type: [Number, String],
				default: 4
			},
			background: {
				type: String,
				default: 'transparent'
			},
			padding: {
				type: String,
				default: '20rpx 30rpx'
			},
			margin: {
				type: String,
				default: '0'
			}
		},
		computed:{
			getLineColor(){
				return this.lineColor || (uni && uni.$g && uni.$g.color.primary) || '#5677fc';
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', {
					title: this.title
				})
			}
		}
	}
</script>

<style scoped>
	.g-section {
		/* #ifndef APP-NVUE */
		width: 100%;
		box-sizing: border-box;
		/* #endif */
	}

	.g-section__title {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		word-break: break-all;
		flex-shrink: 0;
		/* #endif */
		flex-direction: row;
		align-items: center;
	}

	.g-section__decorate {
		position: absolute;
	}

	.g-section__sub {
		/* #ifndef APP-NVUE */
		word-break: break-all;
		/* #endif */
	}

	.g-section__descr {
		font-weight: 400;
	}
</style>