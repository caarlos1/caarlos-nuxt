<script setup lang="ts">
export interface HeaderContainerProps {
  title?: string;
  titleIs?: string;
  description?: string;
  center?: boolean;
  right?: boolean;
}

const props = withDefaults(defineProps<HeaderContainerProps>(), {
  title: "Title",
  description: "",
  titleIs: "h2",
  center: false,
  right: false,
});

const titleListObject = computed(() => {
  if (!props.title || !props.title.length) return [];

  const titleList: { type: string; text: string; class: string }[] = [];
  const splitTitle = props.title.split("<=>");

  for (let i = 0; i < splitTitle.length; i++) {
    const item = { type: "span", text: "", class: "" };

    const piceSplit = splitTitle[i].split("->");
    item.text = piceSplit[0];

    if (piceSplit.length > 1) {
      const findClass = piceSplit.find((i) => i.includes("class:"));
      if (findClass) item.class = findClass.split(":")[1];

      const findType = piceSplit.find((i) => i.includes("type:"));
      if (findType) item.type = findType.split(":")[1];
    }

    titleList.push(item);
  }
  return titleList;
});
</script>

<template>
  <div
    data-testid="header-container"
    class="header__container"
    :class="{ center, right }"
  >
    <component :is="titleIs" class="header__title">
      <template v-if="titleListObject.length" v-for="t of titleListObject">
        <span v-if="t.type === 'span'" :key="t.text" :class="t.class">
          {{ t.text }}
        </span>

        <br v-if="t.type === 'br'" :key="t.text" />
      </template>
    </component>

    <div v-if="description" class="header__desc">
      <span v-html="description" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./HeaderContainer.scss";
</style>
