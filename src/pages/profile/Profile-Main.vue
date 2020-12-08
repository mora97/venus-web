<template>
  <div id="profile-main">
    <div class="row" id="desktop">
      <div class="col-4">
        <profile-upper class="mt-2"></profile-upper>
        <profile-middle class="mt-2"></profile-middle>
      </div>
      <div class="col-8 text-right mt-2 mb-2">
        <router-view></router-view>
      </div>
      <div class="col-12">
        <multi-carousel></multi-carousel>
      </div>
    </div>
    <div id="mobile">
      <go-back></go-back>
      <router-view class="mt-5"></router-view>
    </div>
    <address-modal title="افزودن آدرس" id="modal-add-address" confirmBtn="اضافه شود"></address-modal>
    <address-modal title="ویرایش آدرس" id="modal-edit-address" confirmBtn="ذخیره"></address-modal>
  </div>
</template>

<script>
import ProfileUpper from "../../components/profile/Profile-Upper";
import ProfileMiddle from "../../components/profile/Profile-Middle";
import MultiCarousel from "../../components/Multi-Item-Carousel";
import { mapGetters, mapActions } from "vuex";
import GoBack from "../../components/GoBack";
import AddressModal from "../../components/modals/Modal-Address";

export default {
  components: {
    ProfileUpper,
    ProfileMiddle,
    MultiCarousel,
    GoBack,
    AddressModal
  },
  methods: {
    ...mapGetters(["getProfileSubject"]),
    ...mapActions(["asyncGetProfileData"])
  },
  created() {
    this.asyncGetProfileData();
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // if (vm.getProfileSubject() == "ورود / عضویت") {
      //   vm.$router.push("/");
      // }
    });
  }
};
</script>

<style scoped>
#profile-main {
  background: #f4f4f4;
}

#mobile,
#arrow-back {
  display: none;
}
.router-link-active {
  background: red !important;
}
.col-4 {
  margin-top: 2.5em
}
.col-8 {
  margin-top: 3.5em
}
@media (max-width: 768px) {
  #profile-mobile,
  #arrow-back {
    display: block;
  }
  #profile-desktop {
    display: none;
  }
  #icon-arrow-back {
    width: 2.7em;
  }
  #mobile {
    background-color: #f7f4f4;
    display: block;
  }
  #desktop {
    display: none;
  }
}
</style>