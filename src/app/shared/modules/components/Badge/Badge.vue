<template>
  <span :class="`badge ${variant}`">
    <typography :text="text" variant="label"/>
    <button v-if="dismissable" @click="emits('onDismiss')">
      <icon icon="jam:close"></icon>
    </button>
  </span>
</template>
<script setup lang="ts">
import Typography from '@components/Typography/Typography.vue';
import { Icon } from '@iconify/vue';
import { BadgeProps, BadgeEmits } from '../../../models/components/badge';

const { variant, text, dismissable } = defineProps<BadgeProps>();
const emits = defineEmits<BadgeEmits>()
</script>