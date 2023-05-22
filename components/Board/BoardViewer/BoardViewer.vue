<template>
    <div class="boardViewerBox absoluteFull backdropColor backdropBlur centered"
        v-if="isPlaying">
        <span class="icon topRightButton lightText" @click="selectedMedia = ''">close</span>

        <div class="boardViewer_contentBox">
            <p v-if="selectedMedia.text">
                {{ selectedMedia.text }}
            </p>

            <img v-if="selectedMedia.type == 'image'" :src="`${appConfig.directus.assets}${selectedMedia.file}`" alt="">
        </div>
    </div>
</template>

<script setup>
const selectedMedia = useState('selectedMedia', () => null)
const isPlaying = useState('isPlaying', () => false)
const appConfig = useAppConfig()

</script>

<style scoped>
.boardViewerBox {
    padding: 20px;
}
.boardViewer_contentBox {
    width: min(800px, 100%);
    height: 100%;
    background-color: var(--color-a);
    border-radius: 25px;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.285);
}
</style>