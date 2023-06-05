<template>
<div class="iconMediaBox relative centered full" :class="{'active' : selectedMedia.id === mediaId }" >
    <div class="mediaIconSVGBox centered" >
        
        <IconMediaSVG :mediaType="mediaType" @iconSelected="handleIconSelection" />
    </div>

    <div class="frameBox absoluteFull" :class="{ 'active': mediaId && mediaId.slice(-1) % 2 == 0 }">
        <img src="/images/doodles/frame2.png" class="objectFitContained" alt="">
    </div>

    <div class="eyeBox absoluteFull" v-if="mediaWasSeen == 'true'">
        <img src="/images/doodles/icons/eye.png" class="objectFitContained" alt="">
    </div>

    <div class="selectionCircleBox">
        <img src="/images/doodles/selection-circle.png" class="objectFitContained" alt="">
    </div>
</div>
</template>

<script setup>

const selectedMedia = useState('selectedMedia', () => { return { id: "", title: "", type: "", file: "" } })
const mediaCollection = useState('mediaCollection', () => [])



const props = defineProps({
    mediaId: String,
    mediaType: String,
    pageIndex: Number,
    iconIndex: Number
})
const mediaWasSeen = ref(localStorage.getItem(props.mediaId))

// trigger the update of the mediaWasSeen value when the selectedMedia changes
watch(() => selectedMedia.value, (newValue, oldValue) => {

    if (newValue.id == '') {
        mediaWasSeen.value = localStorage.getItem(props.mediaId)
    }
})
const handleIconSelection = () => {
    selectedMedia.value = mediaCollection.value[props.pageIndex][props.iconIndex]
}


</script>

<style scoped>
.eyeBox {
    pointer-events: none;
    opacity: 0.8;
    filter: brightness(1.3);
}
.frameBox {
    display: none;
    pointer-events: none;
}
.frameBox.active{
    display: block;
}
.selectionCircleBox {
    display: none;
}
.iconMediaBox.active .selectionCircleBox{
    display: block;
}
.mediaIconSVGBox {
    height: 52px;
    width: 52px;
}
.selectionCircleBox {
    position: absolute;
    height: min(84px, 100%);
    aspect-ratio: 1/1;
    border-radius: 500px;
    pointer-events: none;
}


</style>