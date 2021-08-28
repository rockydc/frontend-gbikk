<template>
  <div
    class="
      wrapper-doa
      grid grid-cols-1
      lg:grid-cols-2
      px-10
      text-center
      lg:text-left lg:px-20
      mt-20
    "
  >
    <div class="content-form flex justify-center items-center flex-col">
      <h1 class="lg:text-4xl xl:text-4xl font-bold">Permohonan Doa</h1>
      <p class="mt-2">
        Jika saudara memiliki pokok permohonan doa, silahkan mengisi form
        berikut
      </p>
      <form class="rounded pt-6 pb-8 mb-4">
        <div class="mb-4 w-full lg:w-2/3">
          <label class="block text-white-700 text-sm font-bold mb-2" for="name">
            Nama
          </label>
          <input
            class="
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="name"
            type="text"
            placeholder="Cth:agus"
          />
        </div>
        <div class="mb-4 w-full lg:w-2/3">
          <label class="block text-white-700 text-sm font-bold mb-2" for="nowa">
            Nomor Whatsapps
          </label>
          <input
            class="
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="nowa"
            type="text"
            placeholder="Cth:6287884421799"
          />
        </div>
        <div class="mb-4 w-full lg:w-2/3">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            id="email"
            type="text"
            placeholder="Cth:kk@gmail.com"
          />
        </div>
        <div class="mb-4w-full lg:w-2/3">
          <label
            class="block text-white-700 text-sm font-bold mb-2"
            for="email"
          >
            Pokok Doa
          </label>
          <textarea class="w-full" name="doa" id="doa" rows="8"></textarea>
        </div>
        <Button class="mt-5 w-1/2" :class="'btn-submit'" title="Kirim" />
      </form>
    </div>
    <div class="content-verse pt-12">
      <p>
        TUHAN dekat pada setiap orang yang berseru kepadaNya, pada setiap orang
        yang berseru kepadaNya dalam kesetiaan. Ia melakukan kehendak
        orang-orang yang takut akan Dia, mendengarkan teriak mereka minta tolong
        dan menyelamatkan mereka.
      </p>
      <p class="mt-4 font-bold">Mazmur 145 : 18 -19</p>
      <img src="pray.webp" alt="pray.webp" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'pages',
}
</script>
<style lang="scss" scoped>
.btn {
  width: 25%;
}
@include mobile {
  .btn {
    width: 100%;
  }
}
</style>
