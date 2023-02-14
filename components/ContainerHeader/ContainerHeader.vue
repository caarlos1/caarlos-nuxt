<script setup lang="ts">
export interface ContainerHeaderProps {
  title?: string;
  titleIs?: string;
  description?: string;
}

withDefaults(defineProps<ContainerHeaderProps>(), {
  title: "Title",
  description: "",
  titleIs: "h2",
});
</script>

<template>
  <div class="header__container">
    <component :is="titleIs" class="header__title">
      <span v-html="title"></span>
    </component>
    <div v-if="description" class="header__desc">
      <span v-html="description" />
    </div>
    </div>
  </template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
