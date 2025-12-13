<script setup lang="ts">
import { Inject, veldora } from '@veldora/core';
import { onMounted, ref, watch } from 'vue';
import { UserService } from './user.service';

const userService = Inject(UserService);

// const registerForm = veldora.createForm({
//   name: {
//     initialValue: '',
//     rules: ['email', 'required'],
//   },

//   age: {
//     initialValue: '',
//     rules: ['required'],
//   },
// });

onMounted(() => {
  //console.log(registerForm.name);

  console.log(userService.user.value);
});
</script>
<template>
  <p>{{ userService.user }}</p>

  <!-- <input type="text" v-model="registerForm.name" />
  <p>{{ registerForm.name }}</p> -->

  <button @click="() => userService.data.value++">{{ userService.data }}</button>
</template>
