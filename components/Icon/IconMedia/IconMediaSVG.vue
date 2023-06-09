<template>
    <div class="" @click="handleIconSelection" v-if="mediaType" :class="{'pointer' : mediaType}">
        <img src="/images/icons/round2.png" class="mediaIconImg" v-if="mediaType == 'image'" alt="">

        <img src="/images/icons/triangle1.png" class="mediaIconImg" v-if="mediaType == 'text'" alt="">

        <img src="/images/icons/square1.png" class="mediaIconImg" v-if="mediaType == 'video'" alt="">

        <div class="selectionCircleBox" v-if="mediaIsSelected">
            <img src="/images/doodles/selection-circle.png" class="objectFitContained" alt="">
        </div>
    </div>
</template>


<script setup>
const mediaCollection = useState('mediaCollection', () => [])
const selectedMedia = useState('selectedMedia', () => { return { id: "", title: "", type: "", file: "" } })

const props = defineProps({
    mediaType: String,
    mediaIsSelected: Boolean,
    pageIndex: Number,
    iconIndex: Number
})

const handleIconSelection = () => {
    selectedMedia.value = mediaCollection.value[props.pageIndex][props.iconIndex]
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

.selectionCircleBox {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    position: absolute;
    height: min(84px, 100%);
    aspect-ratio: 1/1;
    pointer-events: none;
}
</style>