<template>
  <Header class="header">
    <img src="event-header.webp" alt="" />
    <h1 class="header-title">
      {{ title }}
    </h1>
  </Header>
</template>
<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style lang="scss" scoped>
.header {
  font-family: Poppins, sans-serif;
  position: relative;

  margin-top: -90px;

  .header-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: whitesmoke;
    font-size: 50px;
  }
}

@include tablet {
  .header {
    margin-top: 0;
    .img-header {
      height: 350px;
      object-fit: cover;
      object-position: center;
    }
    .header-title {
      font-size: 30px;
    }
  }
}

@include mobile {
  .header {
    margin-top: 0;
    .img-header {
      height: 350px;
      object-fit: cover;
      object-position: center;
    }
    .header-title {
      font-size: 30px;
    }
  }
}
</style>
