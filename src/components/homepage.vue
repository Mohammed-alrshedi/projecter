<template>
<div>
  <div class="Honepage"></div>

  </div>
  
</template>

<script>
export default {
  name: "homepage"
};
</script>
<style scoped>
.Honepage {
  height: calc(100vh - 80px);
  background-image: url("https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg?crop=entropy&cs=srgb&dl=photo-of-supernova-in-galaxy-3805983.jpg&fit=crop&fm=jpg&h=2264&w=3698");
  background-position: center;
  background-size: cover;
}
.Honepage > img {
  width: 100%;
  height: 100vh;
}
</style>
