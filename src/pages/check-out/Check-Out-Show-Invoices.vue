<template>
  <div id="show-invoices-mobile">
      <invoice-table></invoice-table>
  </div>
</template>

<script>
import InvoiceTable from "../../components/Invoice-Table"

export default {
    components: {
        InvoiceTable
    }
}
</script>

<style scoped>
#show-invoices-mobile {
    display: none
}
@media (max-width: 768px) {
    #show-invoices-mobile {
        display: block;

    }
}
</style>