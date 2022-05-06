<template>
<h1>Bangkok</h1>
<h2 class="h2">Bangkok is the current capital located in the center of the country. This city is
    byfar the most westernized city of Thailand. Personally, I wasn't a huge fan of Bangkok as the city
    is filled with bumper to bumper traffic all day accompanied with constant honking. However, the public transportation
    in Bangkok makes this city much more bearable to explore and the temples are extremely grand so it's still worth the visit.
</h2>
    <div class = "parentFigureStyle">
        <figure>
          <img src="../assets/Bangkok/outfit.jpg">
          <figcaption class = "text">Got an oppertunity to dress in traditional Thai clothing and visit Wat Pho</figcaption>
        </figure>
        <figure>
          <img src="../assets/Bangkok/arun.jpg">  
          <figcaption class = "text">Visited the Buddhist temple of Wat Arun</figcaption>
        </figure>
        <figure>
          <img src="../assets/Bangkok/china.jpg">
          <figcaption class = "text">Walking down the streets of Chinatown</figcaption>
        </figure>
    </div>
    <div class="parentFigureStyle">
      <figure>
        <img src="../assets/Bangkok/chinatown.jpg">
        <figcaption class = "text">More scenes of Chinatown</figcaption>
      </figure>
      <figure>
        <img src="../assets/Bangkok/skyline.jpg">
        <figcaption class = "text">Beautiful view of the Bangkok skyline from my hotel </figcaption>
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