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
    <h2 class="header__title" v-html="title"></h2>
    <div v-if="description" class="header__desc">
      <span v-html="description" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
