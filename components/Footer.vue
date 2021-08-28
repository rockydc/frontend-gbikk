<template>
  <div class="wrapper">
    <div class="nav-footer-wrapper">
      <div class="footer-content">
        <p class="title">Form</p>
        <router-link to="/doa" class="footer-nav">
          <p>Pelayanan Doa</p>
        </router-link>
        <router-link to="/" class="footer-nav">
          <p>Mulai Melayani</p>
        </router-link>
        <router-link to="/" class="footer-nav">
          <p>Jemaat Baru</p>
        </router-link>
      </div>
      <div class="footer-content">
        <p class="title">Lainnya</p>
        <router-link to="/giving" class="footer-nav">
          <p>Persembahan</p>
        </router-link>
        <router-link to="/" class="footer-nav">
          <p>Kumpulan video kotbah</p>
        </router-link>
        <router-link to="/" class="footer-nav">
          <p>Jadwal Ibadah</p>
        </router-link>
      </div>
      <div class="footer-content">
        <p class="title">Contact</p>

        <p>Jl. Kenanga Indah IV Blok HD No.1 harapan Indah Bekasi</p>
        <p>Telp: 021 888 65751 / 021 887 2351</p>
        <p>Whatsapp : 0812 900 600 83 / 0812 8957 7774</p>
        <p>Email : kasihkarunia.gbi@gmail.com</p>
      </div>
    </div>
    <div class="touch-wrapper">
      <h1 class="mb-8 text-3xl">Stay In Touch</h1>
      <div class="form-wrapper">
        <form class="rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-white-700 text-sm font-bold mb-2"
              for="username"
            >
              Full Name
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
          <div class="mb-6">
            <label
              class="block text-white-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="
                appearance-none
                border-2
                rounded
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
              "
              type="email"
              placeholder="cth: gbi@gmail.com"
            />
          </div>
          <Button class="mt-5" :class="'btn-subscribe'" title="Subscribe" />
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/global.scss';

.btn {
  width: 234px;
}
.wrapper {
  position: relative;
  width: 88%;
  height: 800px;

  margin: 50px auto;
  background: linear-gradient(212.28deg, #ff0909 2.89%, #520a0a 83.82%);
  border-radius: 10px;
  position: relative;
  box-shadow: 0px -10px 60px 0px rgb(0 0 0 / 30%);
  .logo-wrapper {
    bottom: 1.5%;
    left: 2.5%;
    position: absolute;
    z-index: 2;
    img {
      width: calc(150px + 0.5vw);
    }
  }

  .nav-footer-wrapper {
    width: 88%;

    height: 300px;
    margin: 0 auto;
    z-index: 2;
    display: flex;
    justify-content: space-around;
    padding-top: 50px;
    color: whitesmoke;
    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: space-between;

      height: 250px;
      .title {
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 20px;
      }

      .footer-nav {
        color: whitesmoke;
        font-size: 16px;
        text-decoration: none;
      }
    }
  }

  .touch-wrapper {
    text-align: center;
    margin: 0 auto;
    z-index: 2;
    width: 70%;
    height: 500px;

    color: whitesmoke;
    .form-wrapper {
      width: 500px;

      margin: 0 auto;
      .btn-subscribe {
        background-color: white;
        color: black;
        transition: ease-in-out 0.3s;
        border: none;
        &:hover {
          background-color: rgb(191, 191, 191);
        }
      }
      .form-control {
        margin-top: 20px;
      }
    }
  }
}

.copyright-wrapper {
  background-color: black;
  color: whitesmoke;
  padding: 10px 50px;
}

@include ultradesktop {
  .wrapper {
    .nav-footer-wrapper {
      width: 100%;
    }
  }
}
@include tablet-xl {
  .wrapper {
    height: 1200px;

    .nav-footer-wrapper {
      width: 90%;
      flex-wrap: wrap;
      height: 600px;
    }
    .touch-wrapper {
      text-align: center;
      margin: 0 auto;
      z-index: 2;
      width: 70%;
      height: 500px;

      color: whitesmoke;
      .form-wrapper {
        width: 500px;
        margin: 0 auto;
        .form-control {
          margin-top: 20px;
        }
        .btn-subscribe {
          background-color: white;
          color: black;
          transition: ease-in-out 0.3s;
          border: none;
          &:hover {
            background-color: rgb(191, 191, 191);
          }
        }
      }
    }
  }
}
@include tablet {
  .wrapper {
    height: 1200px;

    .nav-footer-wrapper {
      width: 90%;
      flex-wrap: wrap;
      height: 600px;
    }
    .touch-wrapper {
      text-align: center;
      margin: 0 auto;
      z-index: 2;
      width: 80%;
      height: 500px;

      color: whitesmoke;
      .form-wrapper {
        width: 100%;
        margin: 0 auto;
        .form-control {
          margin-top: 20px;
        }
      }
    }
  }
}
@include mobile {
  .btn {
    width: 100% !important;
  }

  .wrapper {
    height: 1400px;
    text-align: center;

    .nav-footer-wrapper {
      width: 95%;
      flex-wrap: wrap;
      height: 800px;

      .footer-content {
        width: 95%;
      }
    }
    .touch-wrapper {
      text-align: center;
      margin: 40px auto;
      z-index: 2;
      width: 100%;

      height: 800px;

      color: whitesmoke;
      .form-wrapper {
        width: 100%;
        margin: 0 auto;
        .form-control {
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
