<script setup lang="ts">
import { computed, PropType, ref } from 'vue';
import { messageApi } from '../../api/firestore-by-type/messageApi';

const title=ref("")
const text=ref("")
const isValid = computed(() => title.value.length > 0)

function addMessage() {
  if(text.value.length > 0 ){
    messageApi.create({
      title: title.value,
      text: text.value,
    })
    title.value = text.value = "";
  }
}
</script>

<template>
  <div>
    <input v-model="title">
    <input v-model="text">
    <button @click="addMessage()" :disabled="!isValid">Add</button>
  </div>
</template>

<style scoped>

</style>