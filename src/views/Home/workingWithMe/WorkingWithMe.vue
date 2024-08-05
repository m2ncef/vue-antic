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
    class="bg-titlesYellow rounded-[25px] flex lg:h-[300px] items-center justify-evenly lg:flex-row flex-col p-[4vh] gap-[3vh]"
  >
    <h1
      class="font-[600] text-[30px] text-center lg:text-start md:text-[48px] md:leading-[62px] text-[#fff] w-[70%] md:w-[85%] lg:w-1/3"
    >
      Interested working with me?
    </h1>
    <div
      class="flex gap-[2vh] lg:gap-[2vh] xl:flex-row flex-col justify-evenly items-center"
    >
      <Button text="Email Me" :isMail="true" />
      <Button text="See More Projects" />
    </div>
  </div>
  <div class="w-full flex flex-col justify-center items-center">
    <img
      class="w-[100%] md:w-[90%]"
      src="../../../assets/Logos.png"
      alt="Logos"
    />
  </div>
</template>
