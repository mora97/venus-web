<template>
  <div id="profile">
    <div id="profile-mobile">
      <div id="profile-upper">
        <profile-upper></profile-upper>
      </div>
      <div class="mt-2" id="profile-middle">
        <profile-middle></profile-middle>
      </div>
      <div class="mt-2" id="profile-lower">
        <div class="carousel">
          <profile-lower></profile-lower>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileUpper from "../../components/profile/Profile-Upper";
import ProfileMiddle from "../../components/profile/Profile-Middle";
import ProfileLower from "../../components/profile/Profile-Lower";

export default {
  components: {
    ProfileUpper,
    ProfileMiddle,
    ProfileLower
  }
};
</script>

<style scoped>
#profile {
  padding: 0em 0.5em;
  background-color: #f7f4f4;
  height: 100%;
}
#profile-mobile {
  display: none;
}
@media (max-width: 768px) {
  #profile-mobile {
    display: block;
  }
}
</style>