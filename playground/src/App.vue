<script setup lang="ts">
import { veldora } from '@veldora/core';

veldora.createForm({
  name:{
    initialValue:'',
    rules:['email','required']
  }
});
</script>
<template></template>
