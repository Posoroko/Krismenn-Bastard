<template>
<div class="iconMediaBox relative centered full" :class="{'active' : selectedMedia == mediaId }" >
    <div class="mediaIconSVGBox centered" 
        :data-mediaId="mediaId" 
        :data-mediaType="mediaType" 
        @click="handleIconSelection">
        
        <IconMediaSVG :mediaType="mediaType" />
    </div>

    <div class="selectionCircleBox">

    </div>
</div>
</template>

<script setup>
const selectedMedia = useState('selectedMedia', () => "")

const props = defineProps({
    mediaId: String,
    mediaType: String
})
const handleIconSelection = (e) => {
    selectedMedia.value = e.currentTarget.getAttribute('data-mediaId')
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