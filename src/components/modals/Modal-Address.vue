<template>
  <div id="modal">
    <div
      class="modal fade"
      :id="id"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">{{ title }}</h5>
            <button type="button" class="close float-left" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="desktop">
              <div class="d-flex justify-content-between">
                <input class="form-control mb-2" placeholder="عنوان آدرس" />
                <input class="form-control mb-2 mr-2" placeholder="تلفن تماس" />
                <input class="form-control mb-2 mr-2" placeholder="کد پستی" />
                <input class="form-control mb-3 mr-2" placeholder="نوع آدرس" />
              </div>
            </div>
            <div id="mobile">
              <input class="form-control mb-2" placeholder="عنوان آدرس" />
              <input class="form-control mb-2" placeholder="تلفن تماس" />
              <input class="form-control mb-2" placeholder="کد پستی" />
              <input class="form-control mb-3" placeholder="نوع آدرس" />
            </div>
            <input class="form-control mb-3" placeholder="نام تحویل گیرنده" />
            <textarea id rows="5" placeholder="آدرس"></textarea>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">{{ confirmBtn }}</button>
          </div>
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
      default: 'title'
    },
    id: {
      type: String,
      default: 'id'
    },
    confirmBtn: {
      type: String,
      default: 'Ok'
    }
  }
};
</script>

<style scoped>
#modal {
  text-align: right;
}
.modal-header button {
  position: absolute;
  left: 0.4em;
  top: 0.5em;
}
input {
  font-size: 0.75em;
}
textarea {
  width: 100%;
}
#mobile {
  display: none;
}
@media (max-width: 578px) {
  #mobile {
    display: block;
  }
  #desktop {
    display: none;
  }
}
</style>