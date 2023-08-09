const mixin = {
  mounted() {
    this.setNavigationBarTitle()
  },
  methods: {
    // 设置标题
    setNavigationBarTitleText() {
      const title = this.navigationBarTitleText || ''
      uni.setNavigationBarTitle(title)
    }
  }
}
export default mixin