<template>
  <div id="profile-middle">
    <div class="card shadow-sm mb-2">
      <div class="card-body">
        <router-link :to="options[0].url" class="mt-2">
          <div class="border-bottom p-3" >
            <img src="../../assets/images/arrow-left.svg" alt class="float-left" />
            <span class="mt-2">{{ options[0].sub }}</span>
          </div>
        </router-link>
        <router-link :to="options[1].url" class="mt-2">
          <div class="border-bottom p-3" >
            <img src="../../assets/images/arrow-left.svg" alt class="float-left" />
            <span class="mt-2">{{ options[1].sub }}</span>
          </div>
        </router-link>
        <router-link :to="options[2].url" class="mt-2">
          <div class="border-bottom p-3" >
            <img src="../../assets/images/arrow-left.svg" alt class="float-left" />
            <span class="mt-2">{{ options[2].sub }}</span>
          </div>
        </router-link>
        <router-link :to="options[3].url" class="mt-2">
          <div class="border-bottom p-3" >
            <img src="../../assets/images/arrow-left.svg" alt class="float-left" />
            <span class="mt-2">{{ options[3].sub }}</span>
          </div>
        </router-link>
        <router-link :to="options[4].url" class="mt-2">
          <div class="border-bottom p-3" >
            <img src="../../assets/images/arrow-left.svg" alt class="float-left" />
            <span class="mt-2">{{ options[4].sub }}</span>
          </div>
        </router-link>
        <router-link :to="options[5].url" class="mt-2">
          <div class="border-bottom p-3" >
            <img src="../../assets/images/arrow-left.svg" alt class="float-left" />
            <span class="mt-2">{{ options[5].sub }}</span>
          </div>
        </router-link>
        <router-link :to="options[6].url" class="mt-2" >
          <div class="border-bottom p-3"  style="opacity: 0.5">
            <img src="../../assets/images/arrow-left.svg" alt class="float-left" />
            <span class="mt-2">{{ options[6].sub }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      options: [
        {
          sub: "اطلاعات شخصی",
          url: "/profile/personal_info"
        },
        {
          sub: "همه سفارش های من",
          url: "/profile/orders"
        },
        {
          sub: "فهرست پیش فاکتورها",
          url: "/profile/invoices"
        },
        {
          sub: "فهرست کالاهای من",
          url: "/profile/products"
        },
        {
          sub: "نقد و نظرات",
          url: "/profile/comments"
        },
        {
          sub: "آدرس ها",
          url: "/profile/addresses"
        },
        {
          sub: "پیغام ها",
          url: "#"
        }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
* {
  font-family: IRANSans;
}
.card {
  border-radius: 8px;
}
.card-body {
  text-align: right;
  padding: 0 0px;
}
a {
  text-decoration: none;
  color: black;
}
.router-link-active .border-bottom{
  background-color: #78e591 !important
}
@media (min-width: 768px) {
  .changeColor {
    background: #78e591;
    margin-right: -0.1em;
  }
}
</style>