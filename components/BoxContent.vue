<template>
  <div class="relative flex justify-center items-center box-content">
    <img class="absolute" :src="path" :alt="name" />
    <div class="absolute bottom-5 left-4">
      <h1 class="text-title text-white text-2xl font-bold">{{ title }}</h1>
    </div>
    <div
      class="
        absolute
        hover-content
        px-4
        flex
        justify-center
        items-center
        flex-col
      "
    >
      <p class="text-white">{{ desc }}</p>
      <div class="flex mt-4">
        <p class="text-white">{{ pic }}:</p>
        <p class="text-white">{{ picNumber }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    name: String,
    title: String,
    desc: String,
    pic: String,
    picNumber: String,
  },
}
</script>
<style lang="scss" scoped>
.box-content {
  height: 476px;
  .hover-content {
    background-color: #dc2626cc;
    width: 100%;
    height: 0%;
    p {
      display: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
    object-position: center;
  }
  &:hover {
    .hover-content {
      display: flex;
      width: 100%;
      height: 100%;
      transition: ease-in-out 0.61s;
      p {
        display: flex;
      }
    }
    .text-title {
      display: none;
    }
  }

  @include mobile {
    height: 300px;
  }
  @include tablet {
    height: 300px;
  }
  @include tablet-xl {
    height: 350px;
  }
}
</style>
