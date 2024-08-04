<script>
export default {
  props: ["text", "isMail"],
};
</script>
<template>
  <button
    :class="{ isMail: isMail == true }"
    class="flex bg-transparent border-2 border-[#fff] text-[#fff] gap-[2vh] justify-center items-center rounded-[10px] font-[700] leading-[36px] text-[24px] w-[271px] h-[70px]"
  >
    <svg
      v-if="isMail == true"
      width="25"
      height="20"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 16H2C0.89543 16 0 15.1046 0 14V1.913C0.0466084 0.842548 0.928533 -0.00101238 2 9.11911e-07H18C19.1046 9.11911e-07 20 0.895432 20 2V14C20 15.1046 19.1046 16 18 16ZM2 3.868V14H18V3.868L10 9.2L2 3.868ZM2.8 2L10 6.8L17.2 2H2.8Z"
        fill="#2F2F2F"
      />
    </svg>
    {{ text }}
  </button>
</template>

<style>
.isMail {
  @apply !bg-[#fff] !text-[#2F2F2F] !font-[600] !text-[24px] !leading-[36px] !w-[210px];
}
</style>
