<template>
  <div id="addresses">
    <h6>آدرس ها</h6>
    <div id="add-address" class="mb-4" data-toggle="modal" data-target="#modal-add-address">
      <div class="row d-flex justify-content-center">
        <span>افزوردن آدرس جدید</span>
        <img src="../../assets/images/big-plus.svg" alt />
      </div>
    </div>
    <div id="addresses-list" class="mb-2">
      <transition-group name="slide">
        <div v-for="(item, index) in addresses" :key="item.id" class="mt-2">
          <addresses-item :addressItem="item" :id="index" class="mt-1 mb-2"></addresses-item>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import AddressesItem from "../../components/profile/Addresses-Item";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    AddressesItem
  },
  data() {
    return {
      addresses: []
    }
  },
  methods: {
    ...mapGetters(["getAddresses"]),
  },
  created() {
    this.addresses = this.getAddresses()
    console.log(this.addresses);
    
  },
};
</script>

<style scoped>
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-thumb {
  background: rgb(175, 174, 174);
}
::-webkit-scrollbar-track {
  background: rgb(255, 252, 252);
  margin-top: 3px;
}
#add-address {
  border: 1px solid var(--border-color);
  padding: 1em 0;
  background: white;
  cursor: pointer;
}
#add-address span {
  margin: auto 0;
  font-size: 0.8em;
}
#add-address img {
  width: 3em;
  height: 3em;
}
#addresses-list {
  height: 30em;
  overflow-y: auto;
  border: 1px solid var(--border-color);
}
#addresses {
  direction: rtl;
  text-align: right
}
</style>