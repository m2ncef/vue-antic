<template>
  <div class="flex flex-row justify-between items-center h-[80px]">
    <h1 class="font-[700] text-[22px] leading-[33px] text-bigTitle">
      Ariene Rey
    </h1>
    <div class="flex gap-[40px]">
      <a
        :href="element"
        :class="{
          selected: element === this.currentElement,
        }"
        v-for="element in navElements"
        :key="element"
        class="text-[16px] leading-[24px] font-[500] text-bigTitle"
      >
        {{ element }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navElements: ["Home", "About", "Project", "Contact"],
      currentElement: window.location.pathname.split("/")[1] || "Home",
    };
  },
};
</script>

<style>
.selected {
  @apply !font-[700] !text-titlesYellow;
}
</style>
