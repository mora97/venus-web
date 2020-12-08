<template>
  <div id="general">
      <div class="d-flex mt-2" v-for="(item, index) in generalData" :key="index">
          <span class="title border ml-3">{{ item.key }}</span>
          <span class="context border flex-fill">{{ item.value }}</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            generalData: [
                {
                    key: 'گرید',
                    value: ''
                },
                {
                    key: 'تولید کننده',
                    value: ''
                },
                {
                    key: 'دسته',
                    value: ''
                }
            ]
        }
    }
}
</script>

<style scoped>
.title {
    width: 7em;
    padding: 0 1em;
    border-radius: 4px;
    background-color: var(--background-color)
}
.context {
    border-radius: 4px;
    padding: 0 0.5em;
    background-color: var(--background-color)
}
</style>