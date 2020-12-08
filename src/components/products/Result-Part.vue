<template>
    <div id="result-part">
        <div class="card">
            <div class="card-body">
                <div id="title">
                    <span>دسته بندی نتایج</span>
                </div>
                <hr>
                <ul class="mr-3">
                    <li id="collection">دسته ۱</li>
                    <li class="mr-2" id="sub-group">نام زیر گروه</li>
                    <li class="mr-4" id="product">نام کالا</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    direction: rtl;
    text-align: right;
    font-size: 0.9em
}
.card-body {
    padding: 0.7em 0.4em
}
hr {
    margin: 0.5em 0
}
</style>