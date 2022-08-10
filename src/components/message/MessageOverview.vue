<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { messageApi } from '../../api/firestore-by-type/messageApi';
import { Message } from '../../types';
import MessageDisplay from './MessageDisplay.vue'
import MessageCreate from './MessageCreate.vue'

const messages = ref<Message[]>([])

onMounted(async () => {
    await refresh();
})

async function refresh() {
    messages.value = await messageApi.getAll();
}
</script>

<template>
    <h1>Messages</h1>
    <message-create />
    <button @click="refresh">refresh</button>
    <message-display v-for="(message, index) in messages" :key="index" :message="message" />
</template>

<style scoped>
</style>
