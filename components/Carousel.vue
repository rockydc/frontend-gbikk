<template>
  <no-ssr>
    <flickity ref="flickity" :options="flickityOptions">
      <img src="~/static/banner-1.webp" alt="banner-1.webp" />
      <img src="~/static/banner-2.webp" alt="banner-2.webp" />
      <img src="~/static/banner-1.webp" alt="banner-1.webp" />
    </flickity>
  </no-ssr>
</template>
<script>
export default {
  data() {
    return {
      flickityOptions: {
        freeScroll: true,
        lazyLoad: true,
        autoPlay: true,
        lazyLoad: 1,
        rightToLeft: true,
      },
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/global.scss';

img {
  height: 500px;
  width: 100%;
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
