<template>
<h1> Chiang Rai</h1>
<h2 class="h2"> Chiang Rai is the northernmost major city in Thailand. It is filled with phenomenal natural 
    beauty and home to the prettiest temples in the country. We drove up about 2.5 hours from Chiang Mai for a day
    trip but were able to cover a lot of ground. 
</h2>
    <div class = "parentFigureStyle">
        <figure>
          <img src="../assets/Chiang_Rai/view.jpg">
          <figcaption class = "text">Hike to Pai Canyon</figcaption>
        </figure>
        <figure>
          <img src="../assets/Chiang_Rai/white.jpg">  
          <figcaption class = "text">Famous White Temple of Chiang Rai</figcaption>
        </figure>
        <figure>
          <img src="../assets/Chiang_Rai/blue.jpg">
          <figcaption class = "text">Famous Blue Temple of Chiang Rai</figcaption>
        </figure>
    </div>
    <div class="parentFigureStyle">
      <figure>
        <img src="../assets/Chiang_Rai/inblue.jpg">
        <figcaption class = "text">Inside the Blue Temple</figcaption>
      </figure>
      <figure>
        <img src="../assets/Chiang_Rai/buddha.jpg">
        <figcaption class = "text">Entrance to a hidden bar</figcaption>
      </figure>
      <figure>
        <img src="../assets/Chiang_Rai/robot.jpg">
        <figcaption class = "text">Swimming under the waterfall</figcaption>
      </figure>
    </div>
     <div class="parentFigureStyle">
      <figure>
        <img src="../assets/Chiang_Rai/fountain.jpg">
        <figcaption class = "text">Waterfall hike through the forest</figcaption>
      </figure>
      <figure>
        <img src="../assets/Chiang_Rai/hut.jpg">
        <figcaption class = "text">Entrance to a hidden bar</figcaption>
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