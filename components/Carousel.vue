<template>
  <no-ssr>
    <carousel
      :rtl="false"
      :nav="false"
      :autoplay="true"
      :items="1"
      :loop="true"
      :responsive="{
        0: {
          stagePadding: 0,
        },
        768: {
          stagePadding: 20,
        },
        1048: {
          stagePadding: 30,
        },
      }"
    >
      <img src="~/static/banner-1.webp" alt="banner-1.webp" />
      <img src="~/static/banner-2.webp" alt="banner-2.webp" />
      <img src="~/static/banner-2.webp" alt="banner-2.webp" />
      <img src="~/static/banner-1.webp" alt="banner-1.webp" />
    </carousel>
  </no-ssr>
</template>
<style lang="scss" scoped>
@import '~/assets/scss/global.scss';

img {
  height: 500px;
}

@include mobile {
  img {
    height: 300px;
  }
}
@include tablet {
  img {
    width: 90%;
    height: 400px;
  }
}
@include tablet-xl {
  img {
    height: 400px;
  }
}
@include desktop {
  img {
    height: 400px;
  }
}
</style>
