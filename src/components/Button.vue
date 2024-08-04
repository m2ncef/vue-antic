<script>
export default {
  props: {
    text: String,
  },
};
</script>
<template>
  <button
    class="bg-titlesYellow text-[#fff] flex gap-[2vh] justify-center items-center rounded-[10px] font-[700] leading-[24px] text-[16px] w-[151px] h-[55px]"
  >
    {{ text }}
  </button>
</template>
