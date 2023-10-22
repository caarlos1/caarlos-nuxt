<script setup lang="ts">
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  LaImage,
  LaClock,
  LaLinkSolid,
  LaCalculatorSolid,
  LaSmileWink,
  LaFileImage,
} from "oh-vue-icons/icons";
import { IconsCard, TheCardTag } from "./types";

export interface TheCardProps {
  title: string;
  url?: string;
  description?: string;
  image?: string;
  tags?: TheCardTag[];
  icon: IconsCard;
}

withDefaults(defineProps<TheCardProps>(), {
  title: "",
  url: "#",
  description: "",
  image: "",
  tags: () => [],
  icon: "la-image",
});

addIcons(
  LaImage,
  LaClock,
  LaLinkSolid,
  LaCalculatorSolid,
  LaSmileWink,
  LaFileImage
);

const handleCardTag = (tag: TheCardTag) => {
  if (typeof tag == "string") {
    return tag;
  } else if (tag?.label) {
    return tag.label;
  }
};
</script>

<template>
  <div class="thecard__shadow">
    <div class="thecard__container">
      <OhVueIcon :name="icon" scale="5" class="thecard__icon" />
      <img v-if="image" :src="image" :alt="title" class="thecard__image" />
    </div>

    <div class="thecard__body">
      <h2 class="thecard__title">{{ title }}</h2>

      <div v-if="description" class="thecard__description">
        <p>{{ description }}</p>
      </div>

      <div v-if="tags.length" class="thecard__taglist">
        <ul>
          <li
            v-for="tag in tags"
            class="taglist__item"
            :class="{
              'is-url': typeof tag !== 'string' && tag.url,
            }"
          >
            <a
              v-if="typeof tag !== 'string' && tag.url"
              :href="tag.url"
              target="_blank"
            >
              <OhVueIcon
                class="fill-color-text"
                name="la-link-solid"
                scale=".75"
              />
              {{ handleCardTag(tag) }}
            </a>
            <span v-else>
              {{ handleCardTag(tag) }}
            </span>
          </li>
        </ul>
      </div>

      <a v-if="url" :href="url" class="thecard__access" target="_blank">
        {{ $t("card.access") }}
      </a>
    </div>
    <div class="thecard__bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "./TheCard.scss";
</style>
