<script setup>
import { ref } from 'vue';
import Home from './components/Home.vue';
import { theme } from 'ant-design-vue';

const { useToken } = theme;
const { token } = useToken();
const isDark = ref(false); // Change 'dark' to 'light' for the light theme
const updateTheme = () => {
  // console.log(newTheme)
  isDark.value = !isDark.value;
};
function test() {
    angka.value = Math.random();
}
</script>

<template>
  <a-config-provider :autoInsertSpaceInButton="false" :theme="{
    token: {
      colorPrimary: isDark ? 'dark' : '#e53637',
    },
  }">
    <!-- <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>


      <HelloWorld :msg="'Hello Vue 3 + Vite'" :angka="angka" :getName="test" :myArr="[1, 2, 3]"
        :customTheme="isDark" :updateTheme="updateTheme" :number="number" />
    </div> -->
    <router-view />
  </a-config-provider>
  <!-- <a href="">{{ number }}</a> -->
</template>

<script setup>
</script>

<style scoped></style>