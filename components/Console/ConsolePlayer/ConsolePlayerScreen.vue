<template>
    <div class="playerScreenBox relative centered">
        <span class="playerScreenText centered" v-if="selectedMedia">{{ selectedMedia }}</span>
    </div>
</template>
<script setup>
const selectedMedia = useState('selectedMedia', () => "")
</script>

<style scoped>
.playerScreenBox {
    /* width: 100%; */
    /* height: 30px; */
    background-color: var(--color-a);
    overflow: visible;
}
.playerScreenText {
    padding: 8px 10px;
}

</style>