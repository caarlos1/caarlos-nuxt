<script setup lang="ts">
export interface HeaderContainerProps {
  title?: string;
  titleIs?: string;
  description?: string;
  center?: boolean;
  right?: boolean;
}

withDefaults(defineProps<HeaderContainerProps>(), {
  title: "Title",
  description: "",
  titleIs: "h2",
  center: false,
  right: false,
});
</script>

<template>
  <div
    data-testid="header-container"
    class="header__container"
    :class="{ center, right }"
  >
    <component :is="titleIs" class="header__title">
      <span v-html="title"></span>
    </component>
    <div v-if="description" class="header__desc">
      <span v-html="description" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./HeaderContainer.scss";
</style>
