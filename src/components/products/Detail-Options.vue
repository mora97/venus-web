<template>
  <div id="detail-options">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-column">
          <div v-for="(option, index) in imgOptions" :key="index">
            <img :src="getImageName(option)" alt :id="'img-'+index" style="margin-right: -0.1em" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgOptions: [
        "like.svg",
        "line-chart.svg",
        "comparison.svg",
        "share.svg",
        "open-document.svg"
      ]
    };
  },
  methods: {
    getImageName(name) {
      return require("../../assets/images/" + name);
    }
  }
};
</script>

<style scoped>
img {
  width: 2.1em;
  height: 2.1em;
  margin: 0.4em 0;
}
.card {
  width: 2.6em;
}
.card-body {
  padding: 0 0.3em;
}
.flex-column #img-2 {
  opacity: 0.2;
}
@media (max-width: 768px) {
  img {
    width: 100%;
    height: 100%;
  }
  .card {
    width: 1.9em;
  }
}
</style>