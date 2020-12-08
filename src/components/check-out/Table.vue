<template>
  <div id="table">
    <table class="table table-bordered table-responsive">
      <thead>
        <tr>
          <th
            scope="col"
            v-for="(item, index) in days"
            :key="index"
            @click="selectDay(index)"
            :class="{ changeColor: day[index] }"
          >{{ item.day }}: {{ item.date }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 7" :key="i">
          <td colspan="7">
            <div class="form-check-input mt-0">
              <input
                type="radio"
                class="form-check-input"
                name="sendingTime"
                :id="'radio' + index"
                :value="'option' + index"
              />
              <label class="form-check-label mr-4" :for="'radio' + index">ساعت ۷ تا ۹</label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        {
          day: "شنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "یکشنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "دوشنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "سه شنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "چهارشنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "پنج شنبه",
          date: "۹۸/۵/۲۶"
        },
        {
          day: "جمعه",
          date: "۹۸/۵/۲۶"
        }
      ],
      day: [],
      index: -1
    };
  },
  methods: {
    selectDay(index) {
      this.index = index;
      this.day[index] = true;
      for (let i = 0; i < 7; i++) {
        if (i != index) this.day[i] = false;
      }
    }
  }
};
</script>

<style scoped>
table {
  background: white;
}
.table th {
  text-align: center;
}
.table th,
td {
  direction: rtl;
  text-align: right;
}
tbody td {
  height: 3em;
}
.changeColor {
  color: #45e217 !important;
}
@media (max-width: 768px) {
  .table th,
  td {
      font-size: 0.7em
  }
  .table th {
      padding: 0.2em 0.3em
  }
}
</style>