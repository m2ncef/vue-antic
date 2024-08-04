<script>
import NavBar from "../../components/NavBar.vue";
import HeroSection from "./heroSection/HeroSection.vue";
import AboutMe from "./aboutMe/AboutMe.vue";
import RecentProjects from "./RecentProjects/RecentProjects.vue";
import WhyHireMe from "./whyHireMe/WhyHireMe.vue";

export default {
  components: {
    NavBar,
    HeroSection,
    AboutMe,
    RecentProjects,
    WhyHireMe,
  },
};
</script>
<template>
  <div class="flex flex-col gap-[3vh]">
    <NavBar />
    <div class="flex flex-col gap-[12vh]">
      <HeroSection />
      <AboutMe />
      <RecentProjects />
      <WhyHireMe />
    </div>
  </div>
</template>
