<template>
  <nav class="flex bg-white justify-between md:justify-around items-center">
    <div class="navbar-brand">
      <img src="logo-gbikk.png" width="60" height="40" alt="logo-gbikk.png" />
    </div>

    <ul
      class="
        hidden
        md:flex
        justify-between
        list-none
        text-white
        md:text-black
        text-lg
        z-20
      "
    >
      <li><NuxtLink to="/">Beranda</NuxtLink></li>
      <li><NuxtLink to="/event">Kegiatan</NuxtLink></li>
      <li><NuxtLink to="/renungan">Renungan</NuxtLink></li>
      <li><NuxtLink to="/">Jadwal Ibadah</NuxtLink></li>
    </ul>

    <div
      class="relative md:hidden menu-toggle flex flex-col justify-between z-30"
    >
      <input type="checkbox" class="absolute" v-on:click="openMobileNav()" />
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      isSlide: true,
    }
  },
  methods: {
    openMobileNav() {
      const nav = document.querySelector('nav ul')

      nav.classList.toggle('slide')
    },
  },
}
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
nav {
  padding: 10px 15px;
  ul {
    width: 40%;
    li {
      font-size: 15px;
    }
  }

  .menu-toggle {
    height: 20px;
    input {
      width: 40px;
      height: 28px;
      opacity: 0;
      left: -6px;
      cursor: pointer;
      top: -5px;
    }
    span {
      display: block;
      width: 28px;
      height: 3px;
      border-radius: 3px;
      background-color: grey;
      transition: all 0.5s;
    }
    span:nth-child(2) {
      transform-origin: 0 0;
    }
    span:nth-child(4) {
      transform-origin: 0 100%;
    }
    input:checked ~ span:nth-child(2) {
      transform: rotate(45deg) translate(-1px, -1px);
    }
    input:checked ~ span:nth-child(4) {
      transform: rotate(-45deg) translate(-1px, 0);
    }
    input:checked ~ span:nth-child(3) {
      transform: scale(0);
    }

    // animation
  }

  @include mobile {
    ul {
      position: absolute;
      display: flex;
      right: 0;
      top: 0;
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
      align-items: center;
      background-color: black;

      transform: translateX(100%);
      transition: all 1s ease-in-out;
    }

    ul.slide {
      transform: translateX(0);
    }
  }
  @include tablet {
    ul {
      width: 50%;
    }
  }

  z-index: 50;
}
</style>
