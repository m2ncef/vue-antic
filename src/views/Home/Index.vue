<script>
import NavBar from "../../components/NavBar.vue";
import HeroSection from "./heroSection/HeroSection.vue";
import WorkingWithMe from "./workingWithMe/WorkingWithMe.vue";
import Clients from "./clients/Clients.vue";
import Footer from "@/components/Footer.vue";
import AboutMe from "../home/AboutMe.vue";
import RecentProjects from "../home/RecentProjects.vue";
import WhyHireMe from "../home/WhyHireMe.vue";

export default {
  data() {
    return {
      menuOpen: false,
      navElements: ["Home", "About", "Project", "Contact"],
      currentElement: window.location.pathname.split("/")[1] || "Home",
    };
  },
  components: {
    NavBar,
    HeroSection,
    AboutMe,
    RecentProjects,
    WhyHireMe,
    WorkingWithMe,
    Clients,
    Footer,
  },
};
</script>
<template>
  <div
    :class="{ showMenu: menuOpen }"
    class="hidden md:hidden flex-col items-center gap-[2vh] justify-center fixed transition-all duration-300 top-[0] h-screen w-full bg-bg"
  >
    <i
      @click="menuOpen = false"
      class="fa-solid fa-xmark fa-2xl absolute top-[5vh] right-[4vh]"
    ></i>
    <a
      :href="element"
      :class="{
        selected: element === this.currentElement,
      }"
      v-for="element in navElements"
      :key="element"
      class="text-[16px] leading-[24px] tracking-[1px] font-[500] text-bigTitle"
    >
      {{ element }}
    </a>
  </div>
  <div class="flex flex-col px-desktop">
    <NavBar @toggle-menu="this.menuOpen = !this.menuOpen" />
    <HeroSection class="h-[calc(100vh-150px)] my-gap" />
    <AboutMe class="my-gap" />
    <RecentProjects class="my-gap" />
    <WhyHireMe class="my-gap" />
    <WorkingWithMe class="my-gap" />
  </div>
  <div class="flex flex-col">
    <Clients class="bg-[#6FC2C5] px-desktop mt-gap" />
    <Footer class="px-desktop" />
  </div>
</template>
