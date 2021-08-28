<template>
  <button class="btn" type="submit">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>
<style lang="scss">
.btn {
  background-color: red;
  color: white;
  width: 100%;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
