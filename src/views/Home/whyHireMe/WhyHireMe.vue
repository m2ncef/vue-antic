<script>
export default {
  components: {},
  data() {
    return {
      advantages: [
        {
          title: "Communicative",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: "/src/assets/Image 01.png",
        },
        {
          title: "Professional",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: "/src/assets/Rectangle.png",
        },
        {
          title: "Collaborative​",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: "/src/assets/Rectangle (1).png",
        },
        {
          title: "Client’s Favourite",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: "/src/assets/Rectangle (2).png",
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
    <div class="flex gap-[4vh] w-full md:flex-nowrap flex-wrap">
      <div
        v-for="(advantage, index) in advantages"
        :key="index"
        class="flex flex-col items-center w-[44%] md:w-[23%] gap-[3vh]"
      >
        <img class="aspect-[240/313]" :src="advantage.picture" :key="index" />
        <div class="flex flex-col items-center md:gap-[1vh]">
          <h1
            class="font-[500] text-[18px] md:text-[1.8vw] md:leading-[36px] text-[#2F2F2F] text-center"
          >
            {{ advantage.title }}
          </h1>
          <p
            class="text-[#828282] font-[400] text-[16px] md:text-[18px] leading-[30px] text-center"
          >
            {{ advantage.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
