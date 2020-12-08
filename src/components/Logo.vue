<template>
    <div @click="navigateToHome()">
        <h1>LOGO</h1>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
h1 {
    cursor: pointer;
}
@media (max-width: 768px) {
    h1 {
        font-size: 1.8em
    }
}
</style>
