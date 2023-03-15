<script setup lang="ts">
import { useHead } from "@vueuse/head";

import BlockContainer from "@/components/BlockContainer";
import HeaderContainer from "@/components/HeaderContainer";
import TextContainer from "@/components/TextContainer";

import { useI18n } from "vue-i18n";
const { t } = useI18n();

useHead({
  title: t("index.head.title"),
});
</script>

<template>
  <BlockContainer bg="mk-2t color">
    <HeaderContainer
      :title="$t('index.title')"
      :description="$t('index.description')"
      title-is="h1"
    />
    <TextContainer :text="$t('index.footer')" text-align="center" />
  </BlockContainer>
</template>

<style lang="scss" scoped></style>
