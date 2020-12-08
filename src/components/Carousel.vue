<template>
  <div id="main-banner" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#main-banner" data-slide-to="0" class="active"></li>
      <li data-target="#main-banner" data-slide-to="1"></li>
      <li data-target="#main-banner" data-slide-to="2"></li>
      <li data-target="#main-banner" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <img class="d-block" src="../assets/images/polymer3.jpg" alt />
      </div>
      <div class="carousel-item">
        <img class="d-block" src="../assets/images/polymer1.jpg" alt />
      </div>
      <div class="carousel-item">
        <img class="d-block" src="../assets/images/polymer2.jpg" alt />
      </div>
      <div class="carousel-item">
        <img class="d-block" src="../assets/images/polymer.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main-banner {
  padding: 0 0.5em;
}
.carousel {
  border-radius: 5px;
}
img {
  width: 100%;
  height: 100%;
}
.carousel-item {
  border-radius: 5px;
  width: 100%;
  height: 25em;
  overflow: hidden;
}
@media (max-width: 768px) {
  .carousel-item {
    width: 100%;
    height: 15em;
    overflow: hidden;
  }
  img {
    width: 100%
  }
}
@media (max-width: 576px) {
  .carousel-item {
    width: 100%;
    height: 10em;
    overflow: hidden;
  }
  img {
    width: 100%
  }
}
</style>
