<template>
  <div
    class="w-full flex flex-col justify-center items-center gap-[7vh] h-screen md:h-[70vh] xl:h-screen"
  >
    <h1
      class="font-[600] text-[32px] md:text-[48px] leading-[60px] text-[#fff] md:w-[50%] text-center"
    >
      We Are Loved By Users And Clients Worldwide
    </h1>
    <swiper-container
      style="
        --swiper-pagination-bullet-inactive-color: #fff;
        --swiper-pagination-bullet-inactive-opacity: 1;
        --swiper-pagination-bullet-active-width: 12px;
        --swiper-pagination-color: #505050;
        --swiper-pagination-bullet-size: 15px;
        --swiper-pagination-bullet-horizontal-gap: 8px;
      "
      :breakpoints="breakPoints"
      pagination=".swiper-pagination"
      slides-per-view="2"
      space-between="50"
      class="w-full flex h-[40vh] md:h-[30vh] xl:h-[60vh]"
    >
      <swiper-slide
        ><Testimonial
          text="It provides an amazing platform for constant conversations and direct feedback between managers and direct reports."
      /></swiper-slide>
      <swiper-slide
        ><Testimonial
          text="One of the best additions to our feedback loop has been the company-wide adoption of Fellow."
      /></swiper-slide>
      <swiper-slide
        ><Testimonial
          text="It provides an amazing platform for constant conversations and direct feedback between managers and direct reports."
      /></swiper-slide>
      <swiper-slide
        ><Testimonial
          text="One of the best additions to our feedback loop has been the company-wide adoption of Fellow."
      /></swiper-slide>
    </swiper-container>
  </div>
</template>

<script>
import { register } from "swiper/element/bundle";
import Testimonial from "./partials/Testimonial.vue";
register();
export default {
  data() {
    return {
      breakPoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
      },
    };
  },
  components: {
    swiperSlide: "swiper-slide",
    swiperContainer: "swiper-container",
    Testimonial,
  },
};
</script>

<style>
.swiper-pagination-bullet-active {
  width: 40px !important;
  opacity: 1;
}
</style>
