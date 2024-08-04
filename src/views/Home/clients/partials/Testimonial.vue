<template>
  <div
    class="bg-[#fff] flex flex-col gap-[3vh] justify-between rounded-br-[30px] rounded-bl-[30px] rounded-tl-[30px] p-[3vh] lg:p-[7vh]"
  >
    <p
      class="text-[#151517] font-[400] text-[14px] lg:text-[24px] lg:leading-[36px] h-[14vh] lg:h-[20vh]"
    >
      {{ text }}
    </p>
    <div
      class="flex items-center gap-[2vh] justify-between flex-col xl:flex-row"
    >
      <div class="flex gap-[2vh] items-center">
        <img
          src="../../../../assets/Picture Profile.png"
          alt="PP"
          class="w-[4vw] h-[4vw]"
        />
        <div class="flex flex-col">
          <h1 class="text-[#2F2F2F] font-[600] text-[16px] leading-[24px]">
            Ronald Richards
          </h1>
          <p
            class="text-[#676767] font-[400] text-[14px] leading-[24px] font-libre"
          >
            UX/UI Designer
          </p>
        </div>
      </div>
      <div class="flex gap-[2vh] items-center">
        <h1 class="text-[#2F2F2F] font-[600] text-[16px] leading-[24px]">
          4.5
        </h1>
        <img
          src="../../../../assets/Rating4.5.png"
          alt="Rating"
          class="w-[15vw] md:w-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
