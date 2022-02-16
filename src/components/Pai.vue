<template>
<h1> Pai</h1>
    <div class = "parentFigureStyle">
        <figure>
          <img src="../assets/Pai/canyon.jpg">
          <figcaption class = "text">Hike to Pai Canyon</figcaption>
        </figure>
        <figure>
          <img src="../assets/Pai/sunset.jpg">  
          <figcaption class = "text">Beautiful sunset</figcaption>
        </figure>
        <figure>
          <img src="../assets/Pai/villaView.jpg">
          <figcaption class = "text">View from my room</figcaption>
        </figure>
    </div>
    <div class="parentFigureStyle">
      <figure>
        <img src="../assets/Pai/hike.jpg">
        <figcaption class = "text">Waterfall hike through the forest</figcaption>
      </figure>
      <figure>
        <img src="../assets/Pai/funBar.jpg">
        <figcaption class = "text">Entrance to a hidden bar</figcaption>
      </figure>
      <figure>
        <img src="../assets/Pai/waterfall.jpg">
        <figcaption class = "text">Swimming under the waterfall</figcaption>
      </figure>
    </div>
  
  

</template>

<script>
export default {
   
}
</script>

<style scoped>
.h1{
    font-size: 35pt;
    
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