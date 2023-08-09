<template>
	<view
    class="g-empty"
    :style="{
      marginTop: marginTop + 'rpx'
    }">
		<image
      class="g-empty__icon"
      :src="types[mode].icon"
      mode="widthFix">
    </image>
		<text
      class="g-empty__title"
      :style="{
        color: color,
        fontSize: `${size}rpx`
      }">
      {{title || types[mode].title}}
    </text>
		<text class="g-empty__desc" v-if="desc">{{desc}}</text>
		<slot></slot>
	</view>
</template>

<script>
  import empty_data from './assets/empty_data.png'
  import empty_approve from './assets/empty_approve.png'
  import empty_message from './assets/empty_message.png'
  import empty_network from './assets/empty_network.png'
  import empty_search from './assets/empty_search.png'
  import empty_todo from './assets/empty_todo.png'

	export default {
		name: "g-empty",
		props: {
      // 模式
      mode: {
        type: String,
        default: 'data'
      },
      // 标题
			title: {
				type: String,
				default: ''
			},
      // 标题大小
			size: {
				type: [Number, String],
				default: 28
			},
      // 描述-可选
			desc: {
				type: String,
				default: ''
			},
      // 标题颜色
			color: {
				type: String,
				default: ''
			},
      // 距离上边距
			marginTop: {
				type: [Number, String],
				default: 0
			}
		},
    data() {
			return {
				types: {
					data: {
            icon: empty_data,
            title: 'No Data'
          },
					approve: {
            icon: empty_approve,
            title: 'No approval'
          },
					message: {
            icon: empty_message,
            title: 'No message'
          },
					network: {
            icon: empty_network,
            title: 'No network'
          },
					search: {
            icon: empty_search,
            title: 'No search results'
          },
					todo: {
            icon: empty_todo,
            title: 'No To Do'
          },
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.g-empty {
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    &__icon{
      width: 420rpx;
      height: auto;
      margin-top: 120rpx;
    }
    &__title{
      text-align: center;
      font-weight: 500;
      padding-top: 48rpx;
      color: #333;
      margin-bottom: 20rpx;
    }
    &__desc{
      text-align: center;
      padding-top: 10rpx;
      color: #999;
      font-size: 24rpx;
    }
	}
</style>