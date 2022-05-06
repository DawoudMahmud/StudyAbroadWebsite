<template>
    <h1>Phuket</h1>
    <h2 class="h2"> Phuket is the largest island in the country located in southern Thailand. This was our first excursion 
      as a group leaving Chiang Mai. There are many smaller islands off the coast of Phuket giving tourists the oppertunity to
      go on all kinds of cruises offered by locals. Almost every beach had Thai people offering rentals to jetski, paddleboard, parasail, kayak,
      and more. Even through covid, this island was very popular and lively.   </h2>
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