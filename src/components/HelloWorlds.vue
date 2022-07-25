<script setup lang="ts">
import { ref } from 'vue'
import { HelloWorld } from '../library'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="worlds">
    <div class="world">
      <hello-world :msg="`${msg} message 1`" />
    </div>
    <div class="world">
      <hello-world :msg="`${msg} message 2`" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.world {
  display: block;
}

.worlds {
  display: flex;
}
</style>
