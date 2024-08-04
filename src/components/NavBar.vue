<template>
  <div class="flex flex-row justify-between items-center h-[100px]">
    <h1 class="font-[700] text-[22px] leading-[33px] text-bigTitle">
      Ariene Rey
    </h1>
    <i
      class="fa-solid fa-bars fa-xl md:hidden"
      @click="$emit('toggleMenu')"
    ></i>
    <div class="gap-[40px] hidden md:flex">
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
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
.selected {
  @apply !font-[700] !text-titlesYellow;
}
.showMenu {
  @apply !flex;
}
</style>
