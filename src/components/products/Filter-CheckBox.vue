<template>
  <div id="filter-check-box">
    <div class="card">
      <div class="card-body">
        <div id="title">
          <span>فیلتر کنید</span>
        </div>
        <hr />
        <div class="mt-2" id="check-box-group">
          <div v-for="i in 5" :key="i">
            <label class="container">
              Three
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>
            <!-- <label >Filter-Item {{ i }}</label>
            <input type="checkbox" :value="i" v-model="accepted" />-->
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
      accepted: []
    };
  }
};
</script>

<style scoped>
.card {
  text-align: right;
  font-size: 0.9em;
}
.card-body {
  padding: 0.7em 0.4em;
}
input[type="checkbox"] {
  float: left;
  margin: 0.25em 0;
}
hr {
  margin: 0.5em 0;
}
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 1.1em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1em;
  width: 1em;
  background-color: #ccc;
  border-radius: 3px
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  margin: 0.1em 0.3em;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
@media (max-width: 768px) {
  #title, hr {
    display: none;
  }
}
</style>