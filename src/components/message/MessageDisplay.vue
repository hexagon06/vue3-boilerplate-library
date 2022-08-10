<script setup lang="ts">
import { PropType } from 'vue';
import { Message } from '../../types';

defineProps<{ message: Message }>()
// defineProps({
//   message: {
//     type: Object as PropType<Message>,
//     required:true,
//   }
// })

</script>

<template>
  <div>
    <h2>{{message.title}}</h2>
    <p>{{message.text}}</p>
  </div>
</template>

<style scoped>

</style>
