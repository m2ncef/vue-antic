<script>
import Button from "./partials/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<template>
  <div class="w-full flex flex-col">
    <div
      id="contact"
      class="bg-titlesYellow mb-gap rounded-[25px] flex items-center justify-between lg:flex-row flex-col p-[3vh] lg:p-[4em] gap-[3vh]"
    >
      <h1
        class="font-[600] text-[30px] text-center lg:text-start md:text-[48px] md:leading-[62px] text-[#fff] w-[70%] md:w-[85%] lg:w-[30%]"
      >
        Interested working with me?
      </h1>
      <div
        class="flex gap-[2vh] lg:gap-[5vh] xl:flex-row flex-col justify-evenly items-center"
      >
        <Button text="Email Me" :isMail="true" />
        <Button text="See More Projects" />
      </div>
    </div>
    <div class="w-full mt-gap flex flex-col justify-center items-center">
      <img
        class="w-[100%] md:w-[90%]"
        src="../../../assets/Logos.png"
        alt="Logos"
      />
    </div>
  </div>
</template>
