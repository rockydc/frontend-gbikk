<template>
  <div class="wrapper relative flex justify-center items-center">
    <img
      class="
        border-black
        absolute
        top-0
        sm:h-auto
        md:h-auto
        lg:h-auto
        xl:h-auto
        z-0
      "
      src="~/static/header-home.svg"
      alt="header-home"
    />
    <div
      class="
        mt-4
        absolute
        w-full
        grid grid-cols-1
        lg:grid-cols-2
        top-0
        sm:top-0
        md:mt-4
        lg:mt-20
        xl:mt-40
        z-10
        md:px-4
        lg:px-8
        xl:px-10
      "
    >
      <div
        class="
          wrapper-title
          md:flex-grow
          lg:flex-1
          xl:flex-1
          md:p-1
          lg:p-2
          xl:p-2
          flex
          justify-center
          items-center
        "
      >
        <img
          class="w-1/2 md:w-1/3 lg:w-2/3 xl:w-1/2"
          src="~/static/foto-pak-gem-sam.webp"
          alt="Foto-Pagem-ko-Sam.png"
        />
      </div>
      <div class="md:flex-3 lg:flex-grow-1 xl:flex-grow p-4">
        <div class="text-title flex justify-center flex-col">
          <p
            class="
              text-gray-900
              sm:text-white
              md:text-white
              lg:text-white
              xl:text-white
              text-center
              sm:text-sm
              md:text-md
              lg:text-2xl
              xl:text-3xl
              font-bold
            "
          >
            "Penginjilan dan Pemuridan Untuk Mendewasakan Jemaat <br />
            Menjadi Sempurna Seperti Kristus"
          </p>
          <p
            class="
              text-gray-500
              sm:text-white
              md:text-white
              lg:text-white
              xl:text-white
              mt-5
              text-center
              sm:mt-3
              xl:mt-10
              text-xs
              md:text-xs
              lg:text-sm
              xl:text-sm
            "
          >
            - Sammy Christian lumband radja s.psi & Pdt Sahala Nainggolan m.Th
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  margin-bottom: 200px;
  .img-header-profile {
    width: 100%;
  }

  // w-1/2 h-30 md:h-40 xl:h-56 lg:h-30 sm:w-1/2 md:w-60 lg:w-auto
}

@include mobile {
  .wrapper {
    height: 50vh;
    margin-bottom: 50px;
  }
}

@include tablet {
  .wrapper {
    height: 70vh;
    margin-bottom: 50px;
  }
}

@include tablet-xl {
  .wrapper {
    height: 70vh;
    margin-bottom: 100px;
  }
}

@include desktop {
  .wrapper {
    height: 70vh;
    margin-bottom: 100px;
  }
}

@include superdesktop {
  .wrapper {
    height: 100vh;
    margin-bottom: 100px;
  }
}

// relative
// h-80
// md:h-96
// lg:h-screen
// xl:h-screen
// sm:h-80
// flex
// mb-20
// md:mb-44
// border-black border-3
// justify-center
// items-center
// wrapper
</style>
