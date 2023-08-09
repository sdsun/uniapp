<template>
	<view class="g-qrcode">
		<canvas
			:id="cid"
			:canvas-id="cid"
			:style="{
				width: `${size}px`,
				height: `${size}px`
			}"
			@click="onClick"
		/>
	</view>
</template>

<script>
import UQRCode from "./qrcode.js"

export default {
	name: "g-qrcode",
	emits: ['click'],
	props: {
		cid: {
			type: String,
			default: 'qrcode'
		},
		size: {
			type: Number,
			default: 200
		},
		data: {
			type: String,
			default: ''
		},
		margin: {
			type: Number,
			default: 10
		},
		backgroundColor: {
			type: String,
			default: '#ffffff'
		}
	},
	methods: {
		makeCode() {
			const {
				data,
				size,
				margin,
				backgroundColor
			} = this
			if (data) {
				var qr = new UQRCode()
				qr.setOptions({
					data,
					size,
					margin,
					backgroundColor
				})
				qr.make()
				var canvasContext = uni.createCanvasContext('qrcode', this)
				qr.canvasContext = canvasContext
				qr.drawCanvas().then()
			} else {
				uni.showToast({
					title: 'QR code content cannot be empty',
					icon: 'none',
					duration: 3000
				})
			}
		},
		saveCode() {
			let that = this;
			if (this.result != "") {
				uni.saveImageToPhotosAlbum({
					filePath: that.result,
					success: function () {
						uni.showToast({
							title: '二维码保存成功',
							icon: 'success',
							duration: 2000
						});
					}
				});
			}
		}
	},
	watch: {
		size: function () {
			setTimeout(() => {
				this.makeCode
			}, 100)
		},
		val: function (n) {
			if (n) {
				setTimeout(() => {
					this.makeCode
				}, 100)
			}
		}
	},
	computed: {
		cpSize() {
			if(this.unit == "upx"){
				return uni.upx2px(this.size)
			}else{
				return this.size
			}
		}
	},
	mounted: function () {
		setTimeout(() => {
			this.makeCode()

		}, 1000)
		// if (this.loadMake) {
		// 	if (!this._empty(this.val)) {
		// 		setTimeout(() => {
		// 			this._makeCode()
		// 		}, 0);
		// 	}
		// }
	},
}
</script>
<style lang="scss" scoped>
.g-qrcode {
  position: relative;
	&-canvas{
		position: absolute;
		top: -10000upx;
		left: -10000upx;
		z-index: -10000;

	}
}
</style>
