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
  <div class="text__container" v-html="text" :class="{ [textAlign]: textAlign }"></div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>
