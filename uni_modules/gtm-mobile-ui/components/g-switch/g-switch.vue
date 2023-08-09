<template>
  <switch
    @change="change"
    :checked="value"
    :disabled="disabled"
    :color="color"
    :style="{
      transform:`scale(${scaleRatio})`
    }">
  </switch>
</template>
<script>
export default{
  name: 'g-switch',
  emits: ['change', 'input'],
  props: {
    color: {
      type: String,
      default: '#3471ff'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
		scaleRatio: {
      type: [Number, String],
      default: 1
    }
  },
  methods: {
    change(e){
      this.$emit('change', e)
      this.$emit('input', e.detail.value)
    }
  }
}
</script>