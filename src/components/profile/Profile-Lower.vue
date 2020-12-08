<template>
  <div id="profile-lower">
    <div>
      <multi-item-carousel :showAll="false" :title="title"></multi-item-carousel>
    </div>
  </div>
</template>

<script>
import MultiItemCarousel from "../Multi-Item-Carousel";

export default {
  components: {
    MultiItemCarousel
  },
  data() {
    return {
      title: "کالاهای پربازدید"
    };
  }
};
</script>

<style scoped>
#profile-lower {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-bottom: 1.5em;
}
a {
  text-decoration: none;
  color: black;
}
</style>