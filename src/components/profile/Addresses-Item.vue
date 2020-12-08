<template>
  <div id="addresses-item">
    <div class="card">
      <div class="card-body">
        <div class="row d-flex justify-content-between">
          <span>{{ addressItem.title }}</span>
          <span>{{ addressItem.phone }}</span>
          <span>{{ addressItem.postalCode }}</span>
          <span>{{ addressItem.type }}</span>
        </div>
        <div class="d-flex flex-column">
          <span class="mt-1">{{ addressItem.receiverName }}</span>
          <span class="mt-1">{{ addressItem.address }}</span>
        </div>
        <div id="edit_delete" class="row">
          <span class="text-success ml-1" data-toggle="modal" data-target="#modal-edit-address">ویرایش</span>
          <span class="text-danger" @click="removeAddresss(id)">حذف</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    addressItem: {
      type: Object,
      default: () => {
        return {
          id: 1,
          title: "",
          phone: "",
          postalCode: "",
          type: "",
          receiverName: "",
          address: ""
        };
      }
    },
    id: {
      type: Number
    }
  },
  components: {
  },
  data() {
    return {
      address: [
        "عنوان آدرس",
        "تلفن تماس",
        "کد پستی",
        "نوع آدرس",
        "نام تحویل گیرنده",
        "آدرس"
      ],
      activeModal: false
    };
  },
  methods: {
    ...mapActions(["asyncRemoveProfileAddress"]),
    removeAddresss(id) {
      this.$swal({
        title: "آیا از حذف آدرس انتخاب شده مطمئن هستید؟",
        type: "warning",
        showCancelButton: true,
        cancelButtonText: 'خیر',
        confirmButtonText: 'بلی'
      }).then(res => {
        if (res.value) {
          // this.$swal(
          //   "text",
          //   "You successfully deleted this file",
          //   "success"
          // );
          this.asyncRemoveProfileAddress(id)
        } else {
          // this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    }
  }
};
</script>

<style scoped>
.card span {
  font-size: 0.9em;
}
#edit_delete {
  position: absolute;
  left: 0.75em;
  bottom: 0.25em;
}
#edit_delete span {
  cursor: pointer;
}

@media (max-width: 768px) {
  #addresses-item {
    direction: rtl;
    text-align: right;
  }
}
</style>