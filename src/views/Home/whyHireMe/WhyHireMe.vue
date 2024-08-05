<script>
import Image1 from "../../../assets/Image 01.png";
import Image2 from "../../../assets/Rectangle.png";
import Image3 from "../../../assets/Rectangle (1).png";
import Image4 from "../../../assets/Rectangle (2).png";

export default {
  components: {},
  data() {
    return {
      advantages: [
        {
          title: "Communicative",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: Image1,
        },
        {
          title: "Professional",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: Image2,
        },
        {
          title: "Collaborative​",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: Image3,
        },
        {
          title: "Collaborative​",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: Image4,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-[5vh]">
    <h1
      class="font-[600] text-[30px] md:text-[48px] leading-[62px] text-[#151517]"
    >
      Why Hire Me?
    </h1>
    <div
      class="flex gap-[4vh] lg:gap-[6vh] w-full xl:flex-nowrap flex-wrap justify-between"
    >
      <div
        v-for="(advantage, index) in advantages"
        :key="index"
        class="flex flex-col items-center w-[44%] lg:w-[44%] gap-[3vh]"
      >
        <img class="aspect-[240/313]" :src="advantage.picture" :key="index" />
        <div class="flex flex-col items-center md:gap-[1vh] w-[80%]">
          <h1
            class="font-[500] text-[18px] md:text-[25px] md:leading-[36px] text-[#2F2F2F] text-center"
          >
            {{ advantage.title }}
          </h1>
          <p
            class="text-[#828282] font-[400] text-[16px] md:text-[18px] md:leading-[30px] text-center"
          >
            {{ advantage.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
