<script setup lang="ts">
import { computed } from 'vue';

export interface ContainerBlockProps {
  bg?: string;
  cover?: boolean;
}

const props = withDefaults(defineProps<ContainerBlockProps>(), {
  bg: "",
  cover: true,
});

const containerClass = computed(() => {
  const { bg, cover } = props;
  return { ["custom--background " + bg]: bg, cover };
});
</script>

<template>
  <div class="block__container" :class="containerClass">
    <div class="block__slot">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
