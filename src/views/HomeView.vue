<template>
  <div class="models-slider" v-if="!maintenance.loading">
    <Transition mode="out-in">
      <div class="models" :key="maintenance.slideNumber">
        <Model v-for="item in maintenance.slide" :key="item.id" :data="item.attributes" />
      </div>
    </Transition>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0.1;
}

</style>

<script setup>
import Model from '../components/Model.vue';

import { onMounted } from 'vue'
import { useMaintenanceStore } from '../stores/maintenance'
const maintenance = useMaintenanceStore()

onMounted(() => {
  maintenance.init()
})
</script>
