<template>
  <div id="Q_A">
    <h6>پرسش و پاسخ</h6>
    <div class="d-flex flex-column mt-2">
      <span>پرسش خود را مطرح کنید</span>
      <textarea class="mt-1" id="question" cols="30"></textarea>
    </div>
    <div class="d-flex mt-4" id="send-question">
      <button class="btn btn-success">ثبت پرسش</button>
      <div class="mr-2">
        <div id="check-box-group">
          <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
            <div class="text mr-2">
              <p>اولین پاسخی که به پرسش من داده شد، از طریق ایمیل به من اطلاع دهید</p>
              <p>
                با انتخاب دکمه "ثبت سفارش"، موافقت خود را با
                <router-link to="#">قوانین انتشار محتوا</router-link>اعلام می کنم
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#Q_A {
  overflow-y: auto;
  border: 1px solid var(--border-color);
  height: 30em;
  padding: 0.2em 0.5em;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}
textarea {
  resize: none;
  border-radius: 5px;
  padding: 0.2em 0.5em;
  height: 15em;
}
#send-question p {
  font-size: 0.8em;
}
#send-question p:last-child {
  margin-top: -1em;
}
#send-question button {
  width: 8em;
  height: 2.5em;
  padding: 0;
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
  right: 0;
  height: 1em;
  width: 1em;
  background-color: #ccc;
  border-radius: 3px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
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
  margin: 0.1em 0.35em;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
@media (max-width: 768px) {
  #Q_A {
    height: 22em;
    border-radius: 8px
  }
  h6 {
    display: none;
  }
  textarea {
    resize: none;
    border-radius: 5px;
    padding: 0.2em 0.5em;
    height: 10em;
  }
  #send-question button {
    width: 8em;
    height: 3em;
    padding: 0;
    font-size: 0.9em
  }
}
</style>