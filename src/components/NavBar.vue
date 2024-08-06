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
        :href="element.id"
        :class="{
          selected: element.id === this.currentElement,
        }"
        v-for="element in navElements"
        :key="element"
        class="text-[16px] leading-[24px] font-[500] text-bigTitle"
      >
        {{ element.name }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navElements: [
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Me",
          id: "#aboutme",
        },
        {
          name: "Projects",
          id: "#projects",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ],
      currentElement: window.location.href.split("/")[3],
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  mounted() {
    setInterval(() => {
      this.currentElement = window.location.href.split("/")[3];
    });
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
