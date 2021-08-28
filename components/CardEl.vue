<template> 
<div class="card  rounded-2xl shadow-lg pb-12">
  <div class="card-header" v-if="img != null">
      <img class="rounded-t-lg " :src="img" :alt="img" />
  </div>
  <div class="card-body py-8"> 
    <div class="tags-wrap px-4">
      <div class="tags rounded-full text-white px-2 py-1  w-28 flex justify-center items-center bg-red-500" v-if="category != null">
        {{category}}
      </div>
    </div>
    <div class="content px-4 mt-4">
      <h1 class="font-bold text-xl ">
     {{title}}
      </h1>

      <p class="mt-4">{{desc}}</p>
    </div>
  </div>
  <div class=" card-footer px-4 flex flex-row justify-between">
    <div class="button-wrap">
      <button type="submit" class="rounded-lg bg-gray-500 hover:bg-red-600 px-4 text-white py-1 duration-500 ease-in-out">Selengkapnya </button>
    </div>
    <div class="date-wrapper w-1/2 flex items-center justify-end font-semibold py-1">
      <span>{{date}}</span>
  
    </div>
  </div>
</div>
</template>
<script>
export default {
  props:{
    img:String,
    title:String,
    date:String,
    desc:String,
    category:String,
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;

}
.card {
  margin: 10px;
  background-color: rgb(95, 0, 0);
  
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden ;
  width: 100%;
  .card-header{
    img{
  width: 100%;
  height: 200px;
  object-fit: cover;
    }
  }
  
}

@include mobile{
  .card{
    width: 80%;
  }
}