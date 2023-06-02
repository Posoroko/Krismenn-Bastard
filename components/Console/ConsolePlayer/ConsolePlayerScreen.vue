<template>
    <div class="playerScreenBox relative">
        <ul class="playerScreenText flex column justifyEvenly" v-if="selectedMedia.id">
            <li> <span>id: </span> <span>{{ `${selectedMedia.id.slice(0, 6)}.bst` }}</span></li>
            <li><span>type: </span><span>{{ selectedMedia.type }}</span></li>
            <li><span>titre: </span><span>{{ selectedMedia.title }}</span></li>
        </ul>
    </div>
</template>
<script setup>
const selectedMedia = useState('selectedMedia', () => { return { id: "", title: "", type: "", file: "" } })
</script>

<style scoped>
.playerScreenBox {
    width: min(200px, 100%);
    height: 100px;
    
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