<script setup lang="ts">
export interface ContainerBlockProps {
  bg?: string;
}

withDefaults(defineProps<ContainerBlockProps>(), {
  bg: "",
});
</script>

<template>
  <div class="block__container" :class="{ ['custom--background ' + bg]: bg }">
    <div class="block__slot">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
