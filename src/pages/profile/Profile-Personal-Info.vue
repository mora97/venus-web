<template>
  <div id="personal-info">
    <div id="personal-info-mobile">
      <h6 class="text-right">اطلاعات شخصی</h6>
      <div class="card shadow-sm">
        <div class="card-body">
          <div class="row">
            <input
              type="text"
              v-model="editedName"
              class="form-control"
              style="width: 10em"
              :disabled="!editable"
            />
            <input
              type="file"
              style="display: none"
              ref="setProfileImage"
              @change="selectImageFile($event)"
              :disabled="!editable"
            />
            <img
              :src="getProfileAvatar()"
              alt
              class="rounded-circle"
              @click="$refs.setProfileImage.click()"
              :class="{'edit-image': editable}"
            />
          </div>
          <hr />
          <div v-for="(option, index) in options" :key="index">
            <input
              type="text"
              class="form-control border-bottom mt-3"
              v-model="options[index]"
              :disabled="!editable"
            />
          </div>
          <input
            type="text"
            class="form-control border-bottom mt-3"
            v-model="desc"
            :disabled="!editable"
          />
          <button
            class="btn float-left mb-2 ml-1 mt-2 shadow-sm"
            @click="editable = !editable, checkForm(2), changeBtnTitle()"
          >{{ btnTitle }}</button>
        </div>
      </div>
    </div>
    <div id="personal-info-desktop">
      <span>مشخصات شخصی</span>
      <div class="card">
        <div class="card-body text-right">
          <div class="row">
            <div class="col-5 d-flex flex-column">
              <span>{{ items[0]}}</span>
              <hr />
              <span>{{ items[2]}}</span>
              <hr />
              <span>{{ items[4]}}</span>
            </div>
            <div class="vr"></div>
            <div class="col-7 d-flex flex-column">
              <span>{{ items[1]}}</span>
              <hr />
              <span>{{ items[3]}}</span>
              <hr />
              <span>{{ items[5]}}</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import Validation from "../../mixins/Validations";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      options: ["شماره تلفن", "آدرس ایمیل", "سمت سازمانی"],
      desc: "",
      editable: false,
      editedName: "نام و نام خانوادگی",
      items: [
        "نام و نام خانوادگی",
        "پست الکترونیک",
        "شماره تلفن همراه",
        "شماره ملی",
        "عضویت در خبرنامه",
        "شماره کارت",
        "",
        ""
      ],
      newImageFile: null,
      setNewImage: "",
      btnTitle: "ویرایش"
    };
  },
  methods: {
    ...mapMutations(["setProfileAvatar"]),
    ...mapGetters(["getProfileAvatar"]),
    selectImageFile(event) {
      var files = event.target.files || event.dataTransfer.files;
      var reader = new FileReader();

      this.newImageFile = event.target.files[0];

      this.onUploadImage();
      reader.onload = e => {
        this.setNewImage = e.target.result;
        // this.setProfileAvatar(this.setNewImage)
        localStorage.setItem("profileImage", this.setNewImage);
      };
      reader.readAsDataURL(files[0]);
    },
    onUploadImage() {
      const fd = new FormData();
      fd.append("image", this.newImageFile, this.newImageFile.name);

      $cookies.set("profileImage", this.newImageFile);
      // this.setNewImage = '../../assets/images/spring'
    },
    changeBtnTitle() {
      if (this.editable == false) {
        this.btnTitle = "ویرایش"
      } else {
        this.btnTitle = "ذخیره"
      }
    }
  },
  created() {
    // this.setNewImage = localStorage.getItem("profileImage");
  },
  mixins: [Validation]
};
</script>

<style scoped>
* {
  font-family: IRANSans;
}
#personal-info {
  padding: 0em 1em;
  height: 100%;
  background: #f7f4f4;
}
img {
  width: 8em;
  height: 8em;
  overflow: hidden;
  z-index: 500;
  margin: 0.5 10em;
}
.card {
  border: none;
  border-radius: 8px;
  background: #fff;
}
.row input {
  margin: auto 0;
}
.card-body {
  text-align: right;
}
input {
  background: #f3fff3;
}
input:disabled {
  border-color: white;
  background-color: #fff;
}
button {
  width: 8em;
  background-color: #9cebaf;
  background-image: url("../../assets/images/edit.svg");
  background-repeat: no-repeat;
  background-position: 6em 0.5em;
  padding-right: 1.5em;
  border-radius: 8px;
}
#personal-info-mobile {
  display: none;
}
.card {
  height: 18em;
  margin-top: 1em;
}
.vr {
  position: absolute;
  height: 100%;
  border-left: 1px solid red;
  right: 45%;
  top: 0;
}
.card-body,
.col-5,
.col-7 {
  padding: 0.25em 0;
}
span {
  margin: 1em auto;
}
.col-7 span {
  margin-right: 3em;
}
.col-5 span {
  margin-right: 2em;
}
.edit-image {
  box-shadow: 0 0 2px 3px var(--border-color)
}
@media (max-width: 768px) {
  #personal-info-mobile {
    display: block;
    padding: 0.5em 0.5em;
  }
  #personal-info-mobile  .card-body{
    padding: 0 0.5em
  }
  #personal-info-mobile  .card-body .row {
    height: 7.5em
  }
  #personal-info-mobile  .card-body img{
    position: absolute;
    left: 0.5em;
    top: 0.25em;
    z-index: 100
  }
  #personal-info-desktop {
    display: none;
  }
  .card {
    height: 100%;
  }
}
</style>