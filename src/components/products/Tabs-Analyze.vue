<template>
  <div id="analyze">
    <span>نقد و بررسی</span>
    <div id="more">
      <router-link to="#">
        <span>ادامه</span>
        <img src="../../assets/images/arrow-left.svg" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#analyze {
  overflow-y: auto;
  border: 1px solid var(--border-color);
  height: 30em;
  padding: 0.2em 0.5em;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}
#more {
  display: none;
}
@media (max-width: 768px) {
  #analyze {
    height: 15em;
    border-radius: 8px;
  }
  #more {
    display: block;
    position: absolute;
    left: 1.5em;
    margin-top: -1.5em
  }
  #more span {
    margin-left: -0.5em;
  }
}
</style>