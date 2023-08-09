<template>
	<radio-group :name="name">
		<slot></slot>
	</radio-group>
</template>

<script>
	export default {
		name: "g-radio-group",
		emits: ['change', 'input'],
		props: {
			name: {
				type: String,
				default: ''
			},
			// inline row row-reverse
			direction: {
				type: String,
				default: 'inline'
			},
			value: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				val: ''
			}
		},
		watch: {
			value(val) {
				this.modelChange(val)
			}
		},
		created() {
			this.childrens = []
		},
		methods: {
			radioChange(e) {
				this.$emit('change', e)
				this.$emit('input', e.detail.value)
			},
			changeValue(value, target) {
				if (value === this.val) return
				this.val = value
				this.childrens.forEach(item => {
					if (item !== target) {
						item.val = false
					}
				})
				let e = {
					detail: {
						value: value
					}
				}
				this.radioChange(e)
			},
			modelChange(val) {
				this.childrens.forEach(item => {
					if (item.value === val) {
						item.val = true
					} else {
						item.val = false
					}
				})
			}
		}
	}
</script>