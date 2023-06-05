<template>
    <div class="" @click="handleIconSelection" v-if="mediaType" :class="{'pointer' : mediaType}">
        <img src="/images/icons/round2.png" class="mediaIconImg" v-if="mediaType == 'image'" alt="">

        <img src="/images/icons/triangle1.png" class="mediaIconImg" v-if="mediaType == 'text'" alt="">

        <img src="/images/icons/square1.png" class="mediaIconImg" v-if="mediaType == 'video'" alt="">
    </div>
</template>


<script setup>
const props = defineProps({
    mediaType: String
})

const emit = defineEmits(['iconSelected'])

const handleIconSelection = () => {
    emit('iconSelected')
}

</script>

<style scoped>

.mediaIconImg {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
    opacity: 0.85;
}
.iconSVG {
    height: 32px;
}
.iconSVG_background,
.playerIcon_background {
    fill: transparent;
}

.iconSVG_path {
    fill: var(--color-e);
}

.iconSVG:hover .iconSVG_path {
    fill: var(--color-b);
    transition: 150ms ease;
    
}

.iconSVG_path {
    transition: 300ms ease;
}
</style>