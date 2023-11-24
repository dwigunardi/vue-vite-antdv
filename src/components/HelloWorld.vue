<script setup>
import { ref, onMounted, watch,defineEmits } from 'vue'

const props = defineProps({
  msg: String,
  angka: Number,
  getName: Function,
  myArr: Array,
  customTheme: Boolean,
  updateTheme: Function,
  number: Number,
})
// const number = ref(props.angka)
const count = ref(0)
watch(() => { return props.customTheme }, (newValue, oldValue) => {
  // This code runs when the 'counter' value changes
  console.log(`Counter changed from ${oldValue} to ${newValue}`);
});

const toggleTheme = () => {
  console.log('run')
  // Emit an event to notify the parent to update the theme
  console.log(props.customTheme)
  props.updateTheme()
  // props.customTheme = 'light'
};

const Emit = defineEmits(['number'])

function increment(){
  Emit('number', 1+1)
  console.log(props.number)
}

</script>

<template>
  <a-space wrap>
    <a-button type="primary">Primary Button</a-button>
    <a-button @click="toggleTheme">change theme</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button @click="increment" type="link">Link Button</a-button>
  </a-space>
</template>

<style scoped></style>
