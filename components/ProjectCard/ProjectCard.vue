<script setup lang="ts">
export interface ProjectCardProps {
  title: string;
  url: string;
  description: string;
  image: string;
}
withDefaults(defineProps<ProjectCardProps>(), {
  title: "",
  url: "",
  description: "",
  image: "https://picsum.photos/id/237/200/300",
});
</script>

<template>
  <div class="">
    <img :src="image" :alt="title" />
    <h2>{{ title }}</h2>
    <span v-if="description">{{ description }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
