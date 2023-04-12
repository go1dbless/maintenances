<template>
    <div class="model">
        <div class="model-cell name">
            <span>{{ data.model }}</span>
        </div>
        <div class="model-cell image" :style="{
            backgroundImage:`url(/cars/${data.image}.png)`
        }">
        </div>
        <div class="model-cell price" :class="[`price-${p}`]" v-for="p in prices" :key="p">
            <div class="price-km">{{ (p * 1000).toLocaleString('kz-KZ') }} км.</div>
            <div class="price-amount">{{ parseInt(data[`price${p}`]).toLocaleString('kz-KZ') }} тг.</div>
        </div>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    data: {
        type: Object
    }
})

const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
</script>