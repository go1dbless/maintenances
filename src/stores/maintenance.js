import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { api } from '../use/api'
import { chunkArray } from "../use/helpers"

export const useMaintenanceStore = defineStore('maintenance', () => {
  const items = reactive([])
  const loading = ref(true)
  const slideNumber = ref(0)
  const timer = ref(null)
  const timeout = 10*1000;

  const slide = computed(() => {
    return items.value[slideNumber.value]
  })

  const nextSlide = () => {
    if (slideNumber.value + 1 === items.value.length) {
      slideNumber.value = 0
    } else {
      slideNumber.value++;
    }
  }

  const startSlider = () => {
    timer.value = setInterval(nextSlide, timeout);
  }

  const init = async () => {
    await getItems()
    loading.value = false
    startSlider();
    setInterval(update, 5*60*1000);
  }

  const update = async () => {
    slideNumber.value = 0;
    clearInterval(timer.value)
    await getItems()
    startSlider();
  }

  const getItems = async () => {
    const response = await api.get("/maintenances")
    items.value = chunkArray(response.data.data, 4);
  }

  return {
    init,
    items,
    getItems,
    loading,
    slide,
    slideNumber
  }
})
