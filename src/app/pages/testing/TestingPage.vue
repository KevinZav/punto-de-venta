<template>
  <div class="text-start">
    <typography variant="h2" text="Testing page" extra-styles="text-blue-500 bold"></typography>
    <indicator :variant="'yellow-warning'" :text="'hola'"></indicator>
    <badge variant="badge-black" text="Vinos" @on-dismiss="dismissBadge" :dismissable="true"></badge>
  </div>
</template>
<script setup lang="ts">
import Typography from '@components/Typography/Typography.vue';
import Indicator from '@components/Indicator/Indicator.vue';
import Badge from '@components/Badge/Badge.vue';

const dismissBadge = () => console.log('badge dismiss')
</script>