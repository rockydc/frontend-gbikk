<template>
  <div class="overflow-x-hidden">
    <HeaderHome />
    <!-- section body content -->

    <div class="static mt-50 section-body-home mx-0 px-0">
      <nuxt keep-alive />
      <div class="h-full relative h-screen mx-0 px-0">
        <img
          class="absolute z-0 top-0"
          src="~/static/body-home.svg"
          alt="body-home"
        />
        <div class="absolute z-10 left-0 right-0">
          <!-- section event -->
          <div
            class="
              -top-16
              section-wrapper-event
              flex flex-col
              sm:flex-col
              md:flex-row
              lg:flex-row
              xl:flex-row
              lg:justify-start
              items-stretch
            "
          >
            <div
              class="
                bg-white
                p-0
                carousel-wrapper
                w-screen
                sm:w-screen
                md:w-3/4
                lg:w-1/2
                xl:w-1/2
                lg:flex-1
                xl:flex-1
                h-40
              "
            >
              <Carousel />
            </div>
            <div
              class="
                hidden
                sm:hidden
                md:hidden
                lg:flex
                xl:flex xl:flex-1
                h-80
                lg:flex-1
                justify-center
                items-center
                w
              "
            >
              <h1
                class="text-center text-white lg:text-4xl xl:text-4xl font-bold"
              >
                Kegiatan
              </h1>
            </div>
          </div>
          <!-- end section event -->

          <div
            class="
              px-4
              sm:px-4
              md:px-8
              lg:px-8
              xl:px-16
              grid
              gap-x-16
              sm:grid-rows-2
              md:grid-rows-2
              lg:grid-cols-2
              xl:grid-cols-2
            "
            v-for="video in videoNews"
            :key="video.id"
          >
            <div
              class="
                sm:h-1/2
                md:h-1/2
                text-white
                font-bold
                flex
                justify-center
                lg:items-center
                sm:items-end sm:text-xl
                lg:text-4xl
                xl:text-4xl
              "
            >
              {{ video.title }}
            </div>
            <div class="sm:-mt-24">
              <Youtube
                data-aos="fade-down"
                data-aos-duration="1000"
                :videoId="video.videoUrl"
                maxWidth="500px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- section body content -->

    <!-- section community -->
    <div class="section-community">
      <h1
        class="
          text-center text-black text-2xl
          lg:text-4xl
          xl:text-4xl
          font-bold
          mb-16
        "
      >
        Komunitas
      </h1>
      <div
        class="
          px-0
          mx-0
          grid
          sm:grid-cols-1 sm:grid-rows-4
          md:grid-cols-2 md:grid-rows-2
          xl:grid-cols-4 xl:grid-rows-1
        "
      >
        <div v-for="comm in community" :key="comm.id">
          <BoxContent
            :name="comm.imageUrl"
            :path="comm.imageUrl"
            :title="comm.name"
            :desc="comm.description"
            :pic="comm.pic"
            :picNumber="comm.phoneNumber"
          />
        </div>
      </div>
    </div>
    <!-- end section community -->

    <!-- section our pastor -->
    <div class="section-our-pastor container mx-auto px-8">
      <div class="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1">
        <div
          class="text-content content flex justify-center items-start flex-col"
        >
          <h1 class="text-3xl font-semibold">Lebih Dekat dengan Gembala</h1>
          <p class="mt-2 text-lg font-bold tracking-widest">
            Pdt.sahala Nainggolan m.Th
          </p>
          <p class="mt-4">
            Hope Church was founded in 2010 by Pastor Sahala and his wife
            christina. This is Photoshop's version of Lorem Ipsum. Proin gravida
            nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
            elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
            mauris.
          </p>
        </div>
        <div class="image-content content flex justify-center items-center">
          <img
            class="w-full md:w-2/3 xl:w-2/3"
            src="youth.webp"
            alt="youth.webp"
          />
        </div>
      </div>
    </div>
    <!-- end section our pastor -->
    <!-- section services -->
    <div class="section-services container mx-auto px-4 xl:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2">
        <div v-for="ministry in ministries" :key="ministry.id">
          <BoxContent
            :name="ministry.imageUrl"
            :path="ministry.imageUrl"
            :title="ministry.name"
            :desc="ministry.description"
            :pic="ministry.pic"
            :picNumber="ministry.phoneNumber"
          />
        </div>
      </div>
    </div>
    <!-- end of section services -->

    <!-- end section body content -->
    <!-- section footer -->

    <!-- end of footer -->
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const path_api_com = '/communityCollections'
    const path_api_video = '/videoNews'
    const path_api_ministries = '/ministryCollections'

    const community = await $axios.get(`api/v1/frontend${path_api_com}`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
    const videoNews = await $axios.get(`api/v1/frontend${path_api_video}`, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
    const ministries = await $axios.get(
      `api/v1/frontend${path_api_ministries}`,
      { headers: { 'Access-Control-Allow-Origin': '*' } }
    )
    return {
      community: community.data.data,
      videoNews: videoNews.data.data,
      ministries: ministries.data.data,
    }
  },
}
</script>
<style lang="scss">
.section-body-home {
  height: 1700px;
}
.section-wrapper-event {
  margin-top: -50px;
  margin-bottom: 600px;
}
.section-community {
  margin-bottom: 200px;
}
.section-our-pastor {
  .content {
    height: 514px;
  }
}
.section-services {
  margin-top: 200px;
}
.section-footer {
  margin-top: 200px;
  margin-bottom: 0;
}

@include mobile {
  .section-wrapper-event {
    margin-top: -50px;
    margin-bottom: 170px;
  }
  .section-body-home {
    height: 500px;
  }
  .section-community {
    margin: 100px auto;
  }
  .section-our-pastor {
    .content {
      height: 314px;
    }
  }
}
@include tablet {
  .section-wrapper-event {
    margin-top: -50px;
    margin-bottom: 250px;
  }
  .section-body-home {
    height: 1200px;
  }
  .section-community {
    margin: 100px auto;
  }
  .section-our-pastor {
    height: auto;
    .content {
      height: 35npom4px;
    }
  }
}
@include tablet-xl {
  .section-wrapper-event {
    margin-top: -50px;
    margin-bottom: 350px;
  }
}
@include desktop {
  .section-wrapper-event {
    margin-top: -50px;
    margin-bottom: 450px;
  }
}
</style>
