<script>
import Button from "./partials/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<template>
  <div
    class="bg-titlesYellow rounded-[25px] flex md:h-[300px] items-center justify-evenly md:flex-row flex-col py-[2vh]"
  >
    <h1
      class="font-[600] text-[32px] md:text-[48px] leading-[62px] text-[#fff] w-[70%] md:w-1/4 text-center"
    >
      Interested working with me?
    </h1>
    <div
      class="flex gap-[2vh] lg:gap-[7vh] lg:flex-row flex-col justify-evenly items-center"
    >
      <Button text="Email Me" :isMail="true" />
      <Button text="See More Projects" />
    </div>
  </div>
  <div class="w-full flex flex-col justify-center items-center">
    <img class="w-[90%]" src="../../../assets/Logos.png" alt="Logos" />
  </div>
</template>
