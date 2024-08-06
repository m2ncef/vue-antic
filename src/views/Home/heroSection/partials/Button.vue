<script>
export default {
  props: ["type", "title"],
};
</script>
<template>
  <button
    :class="type == 'download' ? 'download' : 'mail'"
    class="flex gap-[2vh] justify-center items-center rounded-[10px] font-[700] leading-[24px] md:text-[16px] text-[14px] md:w-[151px] w-[131px] h-[55px]"
  >
    <svg
      v-if="type == 'mail'"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 16H2C0.89543 16 0 15.1046 0 14V1.913C0.0466084 0.842548 0.928533 -0.00101238 2 9.11911e-07H18C19.1046 9.11911e-07 20 0.895432 20 2V14C20 15.1046 19.1046 16 18 16ZM2 3.868V14H18V3.868L10 9.2L2 3.868ZM2.8 2L10 6.8L17.2 2H2.8Z"
        fill="#F1F1F1"
      />
    </svg>
    <svg
      v-if="type == 'download'"
      width="14"
      height="20"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 20H0V18H14V20ZM7 16L1 10L2.41 8.59L6 12.17V0H8V12.17L11.59 8.59L13 10L7 16Z"
        fill="#2F2F2F"
      />
    </svg>
    {{ title }}
  </button>
</template>

<style>
.mail {
  @apply bg-titlesYellow text-[#fff];
}
.download {
  @apply border-titlesYellow border-2 text-[#2f2f2f] !w-[154px] md:!w-[184px];
}
</style>
