<script setup lang="ts">
import { storageService } from "@/services";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const saveLangPrefer = (lang: string) => {
  locale.value = lang;
  storageService.save("lang", lang);
};
</script>

<template>
  <div class="language__selector">
    <ul>
      <li v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" class="language__item">
        <a href="#" @click.prevent="saveLangPrefer(locale)">{{
          $t(`locales.${locale}`)
        }}</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import "./LanguageSelector.scss";
</style>
