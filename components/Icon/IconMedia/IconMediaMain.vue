<template>
<!-- <div class="iconMediaBox relative centered full" :class="{'active' : selectedMedia.id === mediaId }" > -->
<div class="iconMediaBox relative centered full" >
    <div class="mediaIconSVGBox centered" >
        
        <IconMediaSVG 
            :mediaType="mediaType" 
            :mediaIsSelected="mediaIsSelected"
            :iconIndex="iconIndex"
            :pageIndex="pageIndex"/>
    </div>

    <div class="frameBox absoluteFull" :class="{ 'active': mediaId && mediaId.slice(-1) % 2 == 0 }">
        <img src="/images/doodles/frame2.png" class="objectFitContained" alt="">
    </div>

    <div class="eyeBox absoluteFull" v-if="mediaWasSeen == 'true'">
        <img :src="`/images/doodles/icons/oeil_${Math.floor((Math.random() * 10))}.webp`" class="objectFitContained" alt="">
    </div>
</div>
</template>

<script setup>
const selectedMedia = useState('selectedMedia', () => { return { id: "", title: "", type: "", file: "" } })
const mediaWasSeen =  localStorage.getItem(props.mediaId)

watch(() => selectedMedia.value, (newValue, oldValue) => {

    if (newValue.id == '') {
        mediaWasSeen.value = localStorage.getItem(props.mediaId)
    }
})


const props = defineProps({
    mediaId: String,
    mediaType: String,
    pageIndex: Number,
    iconIndex: Number,
    mediaIsSelected : Boolean
})
// const mediaWasSeen = ref(localStorage.getItem(props.mediaId))

// trigger the update of the mediaWasSeen value when the selectedMedia changes





</script>

<style scoped>
.eyeBox {
    pointer-events: none;
    opacity: 0.8;
    
    animation: eyeBlink 1s forwards;
}
@keyframes eyeBlink {
    0% {
        filter: brightness(0.3) hue-rotate(2700deg);
    }
    100% {
        filter: brightness(1.3) hue-rotate(0deg);
    }
}
.frameBox {
    display: none;
    pointer-events: none;
}
.frameBox.active{
    display: block;
}

.mediaIconSVGBox {
    height: 52px;
    width: 52px;
}



</style>