<template>
  <tag-typography v-if="!!text" :class="assignClass" :variant="variant">{{ text }}</tag-typography>
  <tag-typography v-else :class="assignClass" :variant="variant"><slot></slot></tag-typography>

</template>
<script setup lang="ts">
import { TypographyProps } from '@custom-types/components/typography';
import TagTypography from './TagTypography.vue';
import { computed } from 'vue';

const { variant, extraStyles, text } = defineProps<TypographyProps>();

const assignClass = computed(() => {
  return `${variant} ${extraStyles || ''}`;
})
</script>