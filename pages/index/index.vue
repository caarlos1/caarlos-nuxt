<script setup lang="ts">
import TEXT from "./messages.json";
import * as Util from "@/util";

const $t = Util.translationUtil(TEXT);

useHead({
  title: $t("head.title"),
});
</script>

<template>
  <ContainerBlock bg="mask-2t color">
    <ContainerHeader
      :title="$t('fold.title')"
      :description="$t('fold.description')"
    />
    <ContainerText :text="$t('fold.text')" text-align="center" />
  </ContainerBlock>
</template>

<style lang="scss" scoped></style>
