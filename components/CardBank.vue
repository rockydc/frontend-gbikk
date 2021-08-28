<template>
  <div
    class="
      py-4
      card-bank
      flex flex-col
      rounded-lg
      justify-center
      items-center
      shadow-lg
    "
  >
    <img :src="img" alt="" />
    <span>{{ accNumber }} </span>
    <span>{{ accName }}</span>
  </div>
</template>
<script>
export default {
  props: {
    img: String,
    accNumber: String,
    accName: String,
  },
}
</script>
<style lang="scss" scoped>
.card-bank {
  width: 100%;
  img {
    width: 50%;
  }
}
@include mobile {
  .card-bank {
    width: 100%;
    img {
      width: 70%;
    }
  }
}
</style>
