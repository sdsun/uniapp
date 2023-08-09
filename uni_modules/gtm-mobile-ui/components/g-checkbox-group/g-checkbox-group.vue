<template>
	<checkbox-group :name="name">
		<slot></slot>
	</checkbox-group>
</template>

<script>
	export default {
		name: "g-checkbox-group",
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
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				vals: ''
			}
		},
		watch: {
			value(vals) {
				this.modelChange(vals)
			}
		},
		created() {
			this.childrens = []
		},
		methods: {
			checkboxChange(e) {
				this.$emit('change', e)
				this.$emit('input', e.detail.value)
			},
			changeValue() {
				let vals = []
				this.childrens.forEach(item => {
					if (item.val) {
						vals.push(item.value)
					}
				})
				this.vals = vals
				let e = {
					detail: {
						value: vals
					}
				}
				this.checkboxChange(e)
			},
			modelChange(vals) {
				this.childrens.forEach(item => {
					if (vals.includes(item.value)) {
						item.val = true
					} else {
						item.val = false
					}
				})
			}
		}
	}
</script>