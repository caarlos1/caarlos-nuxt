<script setup lang="ts">
export interface ContainerHeaderProps {
  title?: string;
  description?: string;
}

withDefaults(defineProps<ContainerHeaderProps>(), {
  title: "Title",
  description: "",
});
</script>

<template>
  <div class="header__container">
    <h2 class="header__title">{{ title }}</h2>
    <span class="header__desc">
      {{ description }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import "./ContainerHeader.scss";
</style>
