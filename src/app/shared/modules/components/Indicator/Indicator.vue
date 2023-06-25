<template>
  <span class="indicator-container">
    <span :class="`indicator bg-${variant}`"></span>
    <typography v-if="!!text" :text="text" variant="label"></Typography>
  </span>
</template>
<script setup lang="ts">
import { IndicatorProps } from '@custom-types/components/indicator';
import Typography from '@components/Typography/Typography.vue';

const {text, variant} = defineProps<IndicatorProps>()
</script>