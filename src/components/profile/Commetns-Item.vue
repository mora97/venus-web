<template>
  <div id="comment">
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-nowrap">
          <div class="d-flex flex-column flex-wrap mr-2" id="product-detail">
            <img src="../../assets/images/polymer1.jpg" alt />
            <span class="mt-2">name</span>
            <span>producer</span>
            <span>1.2</span>
          </div>
          <div class="d-flex flex-column flex-wrap mr-2 flex-fill" id="comment-text">
            <img src="../../assets/images/quote.svg" alt id="quote-start" />
            <span>title</span>
            <div id="context">
              <p>{{ comment.text }}</p>
            </div>
            <img src="../../assets/images/quote.svg" alt id="quote-end" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: () => {
        return {
          img: "",
          context: "",
          product: {
            name: "",
            producer: "",
            rate: "1.5"
          }
        };
      }
    }
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 2px;
}
::-webkit-scrollbar-thumb {
  background: rgb(197, 195, 195);
}
::-webkit-scrollbar-track {
  background: rgb(255, 252, 252);
  margin-top: 1px
}
.card {
  height: 12em;
  direction: rtl;
  text-align: right
}
.card-body {
  padding: 0.5em 0;
}
#product-detail img {
  width: 5.5em !important;
  height: 5.5em !important;
  border-radius: 5px;
}
img {
  width: 1em;
  height: 1em;
}
#quote-end {
  position: absolute;
  left: 0.5em;
  bottom: 0.5em;
  transform: rotate(180deg);
}
p {
  font-size: 0.75em
}
#context {
  height: 7.3em;
  overflow-y: auto;
  direction: ltr;
  padding: 0 0.2em;
  border: 1px solid var(--border-color);
  width: 100%;
  border-radius: 7px;
}
#comment-text {
    padding-left: 0.2em
}
@media (max-width: 768px) {
    #product-detail span {
        font-size: 0.8em
    }
}
</style>