<template>
    <h1>Phuket</h1>
      <div class = "parentFigureStyle">
          <figure>
            <img src="../assets/Phuket/PaddleBoard.jpg">
            <figcaption class = "text">My first time paddleboarding</figcaption>
          </figure>
          <figure>
            <img src="../assets/Phuket/Buddha.jpg">  
            <figcaption class = "text">Visiting the Big Buddha</figcaption>
          </figure>
          <figure>
            <img src="../assets/Phuket/cruise.jpg">
            <figcaption class = "text">Having the time of our lives on a sunset cruise</figcaption>
          </figure>
      </div>
      <div class="parentFigureStyle">
        <figure>
          <img src="../assets/Phuket/bangla.jpg">
          <figcaption class = "text">Entrance to Bangla Road, the party street of Phuket</figcaption>
        </figure>
         <figure>
          <img src="../assets/Phuket/Motorcycle.jpg">
          <figcaption class = "text">Rented motorcycles to ride around the island</figcaption>
        </figure>
        <figure>
          <img src="../assets/Phuket/sunset.jpg">
          <figcaption class = "text">The most beautiful sunset I have ever seen</figcaption>
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