<template>
  <div class="">
    <HeaderPage title="Event" />
    <div class="flex items-center justify-center px-4">
      <div
        class="
          xl:px-16
          mt-20
          xl:mt-40 xl:mb-40
          grid grid-cols-1 grid-rows-3
          gap-y-9
          md:grid-cols-2 md:grid-rows-2 md:gap-y-9 md:gap-x-9
          xl:grid-cols-3 xl:grid-rows-1 xl:gap-x-10
        "
      >
        <CardEl
          :img="'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg'"
          title="Why is the Tesla Cybertruck designed the way it is? "
          desc="An exploration into the truck's polarising design"
          category="Design"
          date="12, Agustus 2021"
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
