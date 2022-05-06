<template>
  <h1>Dawoud's Semester in Thailand 
  <br>
    <div class="subheader">Fall 2021</div>
  </h1>
<!-- <div class="reg">
  <router-link to="/register"> Register </router-link>
  <router-link to="/login"> Login </router-link>
  <router-link to="/logout"> Logout </router-link>
</div> -->
<div class="menu">
  <router-link to = "/home"> Home </router-link>
  <router-link to="/chiangmai"> Chiang Mai </router-link>
  <router-link to="/phuket">Phuket </router-link>
  <router-link to="/pai"> Pai </router-link>
  <router-link to="/chiangrai"> Chiang Rai </router-link>
  <router-link to="/krabi"> Krabi </router-link>
  <router-link to="/samui"> Koh Samui </router-link>
  <router-link to="/bangkok"> Bangkok </router-link>
  <router-view></router-view>
</div>

</template>

<script>
export default {
  name: "App",
    
};
</script>

<style scoped>
h1{
  font-size: 35pt;
  color: black;
  text-align: center;
  padding: 80px;
  background: skyblue;
  border-radius: 5px;
  
}
  a {
  background-color: #8893fd; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
a.router-link-active {
  background-color: rgb(102, 85, 250);
}

.subheader{
  color: gray;
  text-align: center;
  font-size: 25pt;
  background-color: skyblue;
}
.menu{
  text-align: center;
}
.reg{
  text-align: right;
}
*{
  background: lightblue;
}
</style>
