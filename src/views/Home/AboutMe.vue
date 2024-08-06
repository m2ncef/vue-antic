<script>
import { useMediaQuery } from "@vueuse/core";
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div
    id="aboutme"
    class="w-full bg-[#E9E9E9] rounded-[45px] flex lg:flex-row flex-col gap-[2vh] md:gap-[4vh] xl:gap-[5%] p-[10%] md:p-[4vh] xl:p-[5%]"
  >
    <img
      src="../../assets/Image (1).png"
      class="w-full lg:w-[45%] xl-w-[30%] object-cover h-auto rounded-[25px]"
    />
    <div
      class="lg:w-[60%] w-full flex flex-col justify-start gap-[4vh] md:gap-[5vh]"
    >
      <div
        class="flex justify-start gap-[1vh] md:gap-[inherit] flex-col lg:flex-col xl:flex-row"
      >
        <div>
          <h1
            class="font-[600] text-[36px] md:text-[72px] leading-[62px] text-[#2F2F2F]"
          >
            120<span class="text-[#6FC2C5]">+</span>
          </h1>
          <p
            class="font-[400] text-[20px] md:text-[24px] leading-[36px] text-[#828282]"
          >
            Completed Projects
          </p>
        </div>
        <div>
          <h1
            class="font-[600] text-[28px] md:text-[48px] leading-[62px] flex flex-row items-center text-[#2F2F2F]"
          >
            A+
            <img src="../../assets/Rating.png" alt="Rating" class="ml-[1vh]" />
          </h1>
          <p
            class="font-[400] text-[20px] md:text-[24px] leading-[36px] text-[#828282]"
          >
            Positive Reviews
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-[1em] md:gap-[3vh]">
        <h1
          class="font-[600] text-[28px] md:text-[48px] md:leading-[62px] text-[#151517]"
        >
          Glad to Help You!
        </h1>
        <p
          class="font-[400] text-[18px] md:text-[1.7rem] md:leading-[55px] text-[#000] w-full"
        >
          As a full-service digital designer, I work closely with my clients to
          define, design and develop transformative user experiences across all
          platforms and brand’s touchpoints.
        </p>
      </div>
    </div>
  </div>
</template>
<style></style>
