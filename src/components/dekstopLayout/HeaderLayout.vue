<script setup>
import { ref } from 'vue';

</script>

<template>
     <a-layout>
      <a-layout-header class="flex items-center justify-between w-full align-middle">
        <ul class="flex justify-center gap-8 text-white">
          <li><router-link to="/">Home</router-link></li>
          <li>  <router-link to="/test">Test</router-link></li>
        </ul>
        <div class="flex items-center h-12 p-2 align-middle bg-yellow-200 rounded-md ">sign in</div>
      </a-layout-header>
    </a-layout>
</template>

<script>
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
export {};
</script>

<style scoped>

</style>