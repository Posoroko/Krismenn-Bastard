<template>
    <div class="playerScreenBox relative h100">
        <ul class="playerScreenText flex column justifyEvenly h100" v-if="selectedMedia">
            <li>{{ `id: ${selectedMedia.id.slice(0, 6)}.bst` }}</li>
            <li>type: {{ selectedMedia.type }}</li>
            titre: {{ selectedMedia.title }}
        </ul>
    </div>
</template>
<script setup>
const selectedMedia = useState('selectedMedia', () => "")
</script>

<style scoped>
.playerScreenBox {
    width: min(200px, 100%);
    /* height: 40px; */
    
    background-color: var(--color-a);
    border-radius: 5px;

    overflow: visible;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.227);
}
.playerScreenText {
    height: 100%;
    font-size: 14px;
    font-weight: 600;
    padding-left: 20px;
}

</style>