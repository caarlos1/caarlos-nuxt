<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useHead({
  title: t("index.head.title"),
});
</script>

<template>
  <ContainerBlock bg="mask-2t color">
    <ContainerHeader
      :title="$t('index.title')"
      :description="$t('index.description')"
      title-is="h1"
    />
    <ContainerText :text="$t('index.footer')" text-align="center" />
  </ContainerBlock>
</template>

<style lang="scss" scoped></style>
