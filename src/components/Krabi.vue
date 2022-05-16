<template>
<h1>Krabi</h1>
<h2 class="h2">Krabi is located on the west coast of southern Thailand and easily the most breathtaking province of all.
    The water is emerald green surrounded by limestone cliffs; scenes I would only see in movies.
    With so many small islands nearby, locals offer all kinds of packages to take tourists to different
    islands on long boats. This is a city I have once visited before and fell in love with, however this time
    around I was stunned to see how hard covid had impacted this city. The main street was filled with 
    restaurants and hotels that have gone bankrupt. Hopefully as cases go down Krabi can quickly be revived.
</h2>
    <div class = "parentFigureStyle">
        <figure>
          <img src="../assets/Krabi/sign.jpg">
          <figcaption class = "text">View from the private beach at our hotel</figcaption>
        </figure>
        <figure>
          <img src="../assets/Krabi/sakar.jpg">  
          <figcaption class = "text">Enjoying the sun on a boat</figcaption>
        </figure>
        <figure>
          <img src="../assets/Krabi/mcboat.jpg">
          <figcaption class = "text">Fun boat tour flicks</figcaption>
        </figure>
    </div>
    <div class="parentFigureStyle">
      <figure>
        <img src="../assets/Krabi/cave.jpg">
        <figcaption class = "text">The prettiest water I have ever laid eyes on.</figcaption>
      </figure>
      <figure>
        <img src="../assets/Krabi/boat.jpg">
        <figcaption class = "text">View of the beautiful limestone cliffs</figcaption>
      </figure>
      <figure>
        <img src="../assets/Krabi/water.jpg">
        <figcaption class = "text">More views of the longboats riding through the water between limestone cliffs</figcaption>
      </figure>
    </div>
    <div class="parentFigureStyle">
      <figure>
        <img src="../assets/Krabi/pool.jpg">
        <figcaption class = "text">Swimming in the private pool</figcaption>
      </figure>
      <figure>
        <img src="../assets/Krabi/self.jpg">
        <figcaption class = "text">Relaxing on a boat after midterms</figcaption>
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