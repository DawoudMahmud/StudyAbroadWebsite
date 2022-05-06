<template>
<h1> Pai</h1>
<h2 class="h2">Pai is a small city in northern Thailand known for its slow-paced and relaxed culture.
  This city is filled with all sorts of nature ranging from waterfalls and forests to canyons and hot springs.
  It took us about 3 hours to drive up to Pai from Chiang Mai going through windy roads. Everyone in this city was
  especially nice and helpful wanting to make sure us tourists had a great time.
</h2>
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