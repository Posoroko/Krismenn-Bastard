<template>
<div class="iconMediaBox relative centered full" :class="{'active' : selectedMedia.id === mediaId }" >
    <div class="mediaIconSVGBox centered" 
        @click="handleIconSelection">
        
        <IconMediaSVG :mediaType="mediaType" />
    </div>

    <div class="selectionCircleBox">

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
const handleIconSelection = (e) => {
    selectedMedia.value = mediaCollection.value[props.pageIndex][props.iconIndex]
}

</script>

<style scoped>
.iconMediaBox.active .selectionCircleBox{
    border: 1px solid red;
}
.mediaIconSVGBox {
    height: 48px;
    width: 48px;
    cursor: pointer;
}
.selectionCircleBox {
    position: absolute;
    height: min(84px, 100%);
    aspect-ratio: 1/1;
    border-radius: 500px;
    pointer-events: none;
}


</style>