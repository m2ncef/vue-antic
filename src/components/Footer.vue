<template>
  <div class="flex items-center gap-[3vh] justify-between w-full h-[160px]">
    <h1
      class="w-[30%] text-left font-[500] text-[14px] md:text-[36px] md:leading-[46px] text-[#2F2F2F]"
    >
      Let's Connect
    </h1>
    <img
      src="/src/assets/Social Icon.png"
      alt="Socials"
      class="aspect-[79/17] w-[8vh] md:w-auto"
    />
    <h2
      @click="backToTop"
      class="cursor-pointer w-[30%] font-[500] text-[14px] md:text-[24px] md:leading-[36px] text-[#2F2F2F] flex gap-[2vh] items-center justify-end"
    >
      Back to top
      <svg
        width="18"
        height="24"
        viewBox="0 0 18 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 5.745L15.885 11.115L18 9L9 0L0 9L2.115 11.115L7.5 5.745V24H10.5V5.745Z"
          fill="#2F2F2F"
        />
      </svg>
    </h2>
  </div>
</template>

<script>
export default {
  methods: {
    backToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
