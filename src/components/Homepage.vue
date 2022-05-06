<template>
<h1> Home </h1>
<h2 class="h2"> Welcome to my study abroad experience in Thailand. </h2>
<h4>(Click on a city)</h4>
    <div class = "parentFigureStyle">
        <figure>
          <img src="../assets/home/buddha.jpg">
        </figure>
        <figure>
          <img src="../assets/home/skyline.jpg">  
        </figure>
        <figure>
          <img src="../assets/home/elephant.jpg">
        </figure>
    </div>
    <div class="parentFigureStyle">
      <figure>
        <img src="../assets/home/mall.jpg">
      </figure>
      <figure>
        <img src="../assets/home/chinatown.jpg">
      </figure>
      <figure>
        <img src="../assets/home/temple.jpg">
      </figure>
    </div>
  
  

</template>

<script>
export default {
   
}
</script>

<style scoped>
.h2{
    font-size: 16pt;
    
}
.pics{
  
  padding: 50px
}
.parentFigureStyle {

    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.text {
  font-size: 16pt;
}

</style>