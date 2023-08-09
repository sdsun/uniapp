<script>
	export default {
		onLaunch: function(option) {
			// 接收原生跳转连接query
			uni.setStorageSync("token", '145c7ecd-a827-4458-b742-73e55c252723')
			if (option?.query) {
				const { token, lang } = option.query
				uni.setStorageSync("token", token)
				this.$i18n.locale = lang || "en"
			}
			uni.switchTab({
				url: "/pages/index/index"
			})

			const tabBar = [
				{
					text: this.$t('TabBar.Home')
				},
				{
					text: this.$t('TabBar.About')
				}
			]
			setTimeout(() => {
				tabBar.map((item, index) => {
					uni.setTabBarItem({
						index: index,
						text: item.text
					})
				})
			}, 1000)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
		@import '@/uni_modules/gtm-mobile-ui/index.scss';
</style>
