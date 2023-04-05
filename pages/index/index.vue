<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useGtag } from "vue-gtag-next";
import { useHead } from "@vueuse/head";

import { GTAG } from "@/env";

import BlockContainer from "@/components/BlockContainer";
import HeaderContainer from "@/components/HeaderContainer";
import TheCard from "@/components/TheCard";

import projectsPtBr from "@/data/projects-pt-br.json";
import projectsEn from "@/data/projects-en.json";

import TextContainer from "@/components/TextContainer";
import { storageService } from "@/services";
import LanguageSelector from "@/components/LanguageSelector";

const { t, locale, availableLocales } = useI18n();
const { pageview } = useGtag()
const lang = storageService.load("lang");

const projects = computed(() => {
  if (locale.value == "pt-BR") return projectsPtBr;
  else return projectsEn;
});

if (lang && availableLocales.includes(lang)) {
  locale.value = lang;
}

useHead({
  title: t("home.head.title"),
});

if(GTAG) pageview({})
</script>

<template>
  <BlockContainer bg="mk-2t color" cover>
    <div class="m-20"></div>

    <LanguageSelector />

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
