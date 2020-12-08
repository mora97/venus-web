<template>
  <div>
    <div class="row">
      <div class="col-md-6" v-for="(comment, index) in comments" :key="index">
        <comment-item :comment="comment"></comment-item>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from "../../components/profile/Commetns-Item";
import { mapActions } from "vuex";

export default {
  components: {
    CommentItem
  },
  data() {
    return {
      comments: [
        {
          img: "polymer1.jpg",
          text:
            "I don't know what it isلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید ",
          product: {
            name: "نام کالا",
            producer: "تولیدکننده",
            rate: "1.5"
          }
        },
        {
          img: "polymer1.jpg",
          text: "I don't know what it is",
          product: {
            name: "نام کالا",
            producer: "تولیدکننده",
            rate: "1.5"
          }
        },
        {
          img: "polymer1.jpg",
          text: "I don't know what it is",
          product: {
            name: "نام کالا",
            producer: "تولیدکننده",
            rate: "1.5"
          }
        },
        {
          img: "polymer1.jpg",
          text: "I don't know what it is",
          product: {
            name: "نام کالا",
            producer: "تولیدکننده",
            rate: "1.5"
          }
        },
        {
          img: "polymer1.jpg",
          text: "I don't know what it is",
          product: {
            name: "نام کالا",
            producer: "تولیدکننده",
            rate: "1.5"
          }
        },
        {
          img: "polymer1.jpg",
          text: "I don't know what it is",
          product: {
            name: "نام کالا",
            producer: "تولیدکننده",
            rate: "1.5"
          }
        }
      ]
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.row {
  margin-top: 2.5em
}
.col-md-6 {
  padding: 0.25em 0.25em;
}
</style>