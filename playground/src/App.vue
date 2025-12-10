<script setup lang="ts">
import { veldora } from '@veldora/core';
import { onMounted } from 'vue';

const registerForm = veldora.createForm({
  name: {
    initialValue: '',
    rules: ['email', 'required'],
  },

  age: {
    initialValue: '',
    rules: ['required'],
  },
});

onMounted(() => {
  console.log(registerForm.name);
});
</script>
<template>
  <input type="text" v-model="registerForm.name" />
  <p>{{ registerForm.name }}</p>
</template>
