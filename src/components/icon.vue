<script setup>
import * as icons from '@vicons/ionicons5'
import {defineProps} from 'vue'

const defaultIcon = 'CameraReverseOutline'
const props = defineProps({
  type: {
    type: String,
    default: defaultIcon
  }
})

// Import the specific component dynamically
let propComponent = icons[props.type]
if(propComponent == null) {
  propComponent = icons[defaultIcon]
}

</script>

<template>
  <n-icon>
    <component :is="propComponent" />
  </n-icon>
</template>
