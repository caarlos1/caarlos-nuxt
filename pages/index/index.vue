<script setup lang="ts">
import { useHead } from "@vueuse/head";
import { useI18n } from "vue-i18n";

import BlockContainer from "@/components/BlockContainer";
import HeaderContainer from "@/components/HeaderContainer";
import TheCard from "@/components/TheCard";

import projectsPtBr from "~/data/projects-pt-br.json";
import projectsEn from "~/data/projects-en.json";

import TextContainer from "~/components/TextContainer";

const { t, locale } = useI18n();

const projects = computed(() => {
  if (locale.value == "pt-BR") return projectsPtBr;
  else return projectsEn;
});

useHead({
  title: t("home.head.title"),
});
</script>

<template>
  <BlockContainer bg="mk-2t color" cover>
    <div class="m-20"></div>
    <HeaderContainer
      :title="$t('home.title')"
      :description="$t('home.description')"
      title-is="h1"
      center
    />
    <div class="m-20"></div>
    <HeaderContainer
      :title="$t('home.projects.title')"
      :description="$t('home.projects.description')"
    />
    <div class="project__list">
      <TheCard v-for="project in projects" v-bind="project" />
    </div>
  </BlockContainer>

  <BlockContainer>
    <TextContainer :text="$t('home.footer')" text-align="center" />
  </BlockContainer>
</template>

<style lang="scss">
@import "style.scss";
</style>
