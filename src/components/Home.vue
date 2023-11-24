<script setup>
import { ref } from 'vue';
import HelloWorld from './HelloWorld.vue';
import 'ant-design-vue/dist/reset.css';
import HeaderLayout from './dekstopLayout/HeaderLayout.vue';
import MainLayout from './dekstopLayout/MainLayout.vue';


const props = defineProps({
    test: String,
    msg: String,
    angka: Number,
    getName: Function,
    myArr: Array,
    customTheme: Boolean,
    updateTheme: Function,
    number: Number,
})

const angka = ref(0);



const number = ref(1)


const hello = ref('hello Home')
</script>

<template>
    <div>
        <!-- <HelloWorld :msg="'Hello Vue 3 + Vite'" :angka="props.angka" :getName="test" :myArr="[1, 2, 3]" :customTheme="props.customTheme"
            :updateTheme="props.updateTheme" :number="number" /> -->
        <!-- <h1>{{ hello }}</h1> -->
       <MainLayout>
        <h1>ini Home</h1>
       </MainLayout>
    </div>
</template>