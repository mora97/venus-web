<template>
  <div id="toggelable-fiter">
    <div class="card">
      <div class="card-body">
        <span class="mt-1">{{ title }}</span>
        <label class="switch float-left mt-1">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      dafault: ""
    }
  }
};
</script>

<style scoped>
.card {
  text-align: right;
}
.card-body {
    padding: 0.7em 0.4em;
    font-size: 0.9em
}
span {
    margin: auto 0
}
.switch {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 1em;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 0.8em;
  width: 0.8em;
  left: 1px;
  bottom: 1.5px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(1em);
  -ms-transform: translateX(1em);
  transform: translateX(1em);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>