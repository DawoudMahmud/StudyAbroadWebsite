<template>
<h1>Koh Samui</h1>
<h2 class="h2">Koh Samui is the second largest island of the country and is known for its crystal clear waters. Unfortunately,
    the weekend I went happened to be the weekend of a big storm so almost the entire city was flooded. As a result,
    beaches weren't as clean from washed up trash. I would love to visit this island again some time to see its true beauty.
</h2>
    <div class = "parentFigureStyle">
        <figure>
          <img src="../assets/Samui/bridge.jpg">
          <figcaption class = "text">Hike to Pai Canyon</figcaption>
        </figure>
        <figure>
          <img src="../assets/Samui/waterfall.jpg">  
          <figcaption class = "text">Beautiful sunset</figcaption>
        </figure>
        <figure>
          <img src="../assets/Samui/samui.jpg">
          <figcaption class = "text">View from my room</figcaption>
        </figure>
    </div>
    <div class="parentFigureStyle">
      <figure>
        <img src="../assets/Samui/cliff.jpg">
        <figcaption class = "text">Waterfall hike through the forest</figcaption>
      </figure>
      <figure>
        <img src="../assets/Samui/guitar.jpg">
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