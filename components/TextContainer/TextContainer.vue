<script setup lang="ts">
export interface TextBlockProps {
  text?: string;
  textAlign?: string;
}

withDefaults(defineProps<TextBlockProps>(), {
  text: "",
  textAlign: "left",
});
</script>

<template>
  <!-- TODO: remover v-html -->
  <div
    class="text__container"
    v-html="text"
    :class="{ [textAlign]: textAlign }"
    data-testid="text-container"
  ></div>
</template>

<style lang="scss" scoped>
@import "./TextContainer.scss";
</style>
