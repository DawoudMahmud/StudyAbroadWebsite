<template>
    <h1>Chiang Mai</h1>

      <div class = "parentFigureStyle">
          <figure>
            <img src="../assets/Chiang_Mai/floating.jpg">
            <figcaption class = "text">During the Loy Krathong festival we float these down the river to symbolize our release of bad luck and negative energy</figcaption>
          </figure>
          <figure>
          <img src="../assets/Chiang_Mai/sticky.jpg">
            <figcaption class = "text">Sticky waterfalls named after the ability to walk up these waterfalls with ease</figcaption>
          </figure>
          <figure>
            <img src="../assets/Chiang_Mai/stars.jpg">
            <figcaption class = "text">The whole city was decorated with lights during the lantern festival</figcaption>
          </figure>
      </div>
      <div class="parentFigureStyle">
        <figure>
          <img src="../assets/Chiang_Mai/elephant.jpg">
          <figcaption class = "text">Visited an elephant sanctuary to clean and feed the elephants</figcaption>
        </figure>
        <figure>
          <img src="../assets/Chiang_Mai/temple.jpg">
          <figcaption class = "text">This city is filled with highly decorated and detailed temples</figcaption>
        </figure>
      </div>
      <div class="parentFigureStyle">
        <figure>
            <img src="../assets/Chiang_Mai/lantern.jpg">  
          <figcaption class = "text">Center of the old city during the lantern festival</figcaption>
        </figure>
        <figure>
          <img src="../assets/Chiang_Mai/suthep.jpg">
          <figcaption class = "text">Visited Doi Suthep for sunrise and got blessed by a monk afterwards</figcaption>
        </figure>
        <figure>
          <img src="../assets/Chiang_Mai/view.jpg">
          <figcaption class = "text">Beautiful view from the halfway point of my hike</figcaption>
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