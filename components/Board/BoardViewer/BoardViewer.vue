<template>
    <div class="boardViewerBox absoluteFull backdropColor backdropBlur centered"
        v-if="selectedMedia">
        <span class="icon topRightButton lightText" @click="selectedMedia = ''">close</span>
    </div>
</template>

<script setup>
const selectedMedia = useState('selectedMedia', () => null)
</script>

<style scoped>

</style>