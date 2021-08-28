<template>
  <div>
    <HeaderPage title="Giving" />
    <div class="content px-28 mt-20 flex justify-center items-center">
      <div class="grid grid-cols-3 gap-x-40">
        <CardBank
          img="Logo-Bank-BCA.webp"
          accNumber="15700000000"
          accName="PT Merdeka Digital Asia"
        />
        <CardBank
          img="Logo-Bank-BCA.webp"
          accNumber="15700000000"
          accName="PT Merdeka Digital Asia"
        />
        <CardBank
          img="Logo-Bank-BCA.webp"
          accNumber="15700000000"
          accName="PT Merdeka Digital Asia"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'pages',
}
</script>
<style lang="scss" scoped>
.content {
  margin-bottom: 200px;
}
</style>
