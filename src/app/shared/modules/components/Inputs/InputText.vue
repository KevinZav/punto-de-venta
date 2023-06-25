<template>
  <div class="form-container">
    <input type="text" v-model="value" />
  </div>
</template>
<script setup lang="ts">
import { InputTextProps } from '@custom-types/components/inputs/input-text';
import { computed } from 'vue';

const props = defineProps<InputTextProps>();

const emit = defineEmits<{(event: 'update:modelValue', value: string): void;}>();
const value = computed({
  get() {
    return props.modelValue;
  },
  async set(newValue) {
    props.control.setValue(newValue);
    emit('update:modelValue', newValue)
  }
});
</script>