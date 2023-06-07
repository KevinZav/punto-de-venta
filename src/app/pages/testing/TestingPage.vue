<template>
  <div class="bg-green-light py-xs px-lg mx-lg w-[200px] text-start">
    <typography variant="h2" text="Testing page" extra-styles="text-blue-500 bold"></typography>
    <indicator :variant="'yellow-warning'" :text="'hola'"></indicator>
  </div>
</template>
<script setup lang="ts">
import Typography from '@components/Typography/Typography.vue';
import Indicator from '@components/Indicator/Indicator.vue';
</script>