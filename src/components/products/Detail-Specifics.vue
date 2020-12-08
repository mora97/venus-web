<template>
  <div id="specifics">
    <h6>{{ title }}</h6>
    <div class="card">
      <div class="card-body">
        <div v-for="item in specifics" :key="item.id">
          <span>{{ item.title }}: {{ item.value}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      specifics: [
        {
          title: "رنگ",
          value: " مشکی"
        },
        {
          title: "گرید",
          value: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
#specifics {
    text-align: right;
}
h6 {
  font-size: 0.8em
}
span {
  font-size: 0.75em
}
.card {
    height: 15em;
    /* min-width: 6em */
}
.card-body {
    padding: 0.2em 0.2em
}
</style>