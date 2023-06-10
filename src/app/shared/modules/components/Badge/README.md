## Badge component

For more information about props, emits and variants, you can see `BadgeProps` and `BadgeEmits`

```html
<template>
  <badge variant="badge-black" text="Vinos" @on-dismiss="dismissBadge" :dismissable="true"></badge>
</template>
<script setup lang="ts">
import Badge from '@components/Badge/Badge.vue';

const dismissBadge = () => console.log('badge dismiss')
</script>
```