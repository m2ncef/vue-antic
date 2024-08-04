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
          picture: "../../assets/Rectangle (1).png",
        },
        {
          title: "Professional",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: "@/assets/Rectangle (2).png",
        },
        {
          title: "Collaborative​",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: "@/assets/Rectangle.png",
        },
        {
          title: "Client’s Favourite",
          content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
          picture: "@/assets/Image 01.png",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-[5vh]">
    <h1 class="font-[600] text-[48px] leading-[62px] text-[#151517]">
      Why Hire Me?
    </h1>
    <div class="flex gap-[10vh]">
      <div
        v-for="(advantage, index) in advantages"
        :key="index"
        class="flex flex-col items-center"
      >
        <img class="aspect-[240/313]" :src="advantage.picture" :key="index" />
        <h1 class="font-[500] text-[24px] leading-[36px] text-[#2F2F2F]">
          {{ advantage.title }}
        </h1>
        <p
          class="text-[#828282] font-[400] text-[18px] leading-[30px] text-center"
        >
          {{ advantage.content }}
        </p>
      </div>
    </div>
  </div>
</template>
