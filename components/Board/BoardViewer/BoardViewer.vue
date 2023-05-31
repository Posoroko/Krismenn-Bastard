<template>
    <div class="boardViewerBox backdropColor backdropBlur centered"
        :class="{ 'visible' : isPlaying }">
        
        <!-- <IconMiscCloseButton /> -->

        <div class="boardViewer_contentBox centered" ref="boardViewer_contentBox">
            <p class="mediaText" v-if="selectedMedia.text" ref="mediaText">
                
            </p>

            <img class="viewerImg" v-if="selectedMedia.type == 'image'" :src="`${appConfig.directus.assets}${selectedMedia.file}?key=viewer800`" alt="">
            <!-- <img class="viewerImg" v-if="selectedMedia.type == 'video'" :src="`${appConfig.directus.assets}${selectedMedia.file}?key=viewer800`" alt=""> -->
            <video autoplay loop class="viewerVideo" v-if="selectedMedia.type == 'video'" :src="`${appConfig.directus.assets}${selectedMedia.file}`"></video> 
        </div>
    </div>
</template>

<script setup>
const selectedMedia = useState('selectedMedia', () => { return { id: "", title: "", type: "", file: "" } })
const isPlaying = useState('isPlaying', () => false)
const appConfig = useAppConfig()
const boardViewer_contentBox = ref(null)
const mediaText = ref(null)

const transformTextIntoArrayOfLetters = (text) => {
    const text_array = text.split('')
    return text_array
}

const text_array = ref(null)

watch(selectedMedia, () => {
    if (selectedMedia.value.type == 'text') {
        text_array.value = selectedMedia.value.text.split('')
    } 
})

watch(isPlaying, () => {
    if(selectedMedia.value.type == 'text') {
        animateMediaText()
    }
    
}) 

const animateMediaText = () => {
    const newSpan = (char) => {
        const span = document.createElement('span')
        span.classList.add('mediaTextSpan')
        span.innerText = char
        return span
    }
    const randomDelay = () => {
        let delay = Math.floor(Math.random() * 200)
        console.log(delay)
        return delay
    }
    let counter = 0
    const slowlyAppendSpans = () => {
        if (counter < text_array.value.length) {
            mediaText.value.append(newSpan(text_array.value[counter]))
            counter++
            setTimeout(slowlyAppendSpans, randomDelay())
        }
    }
    slowlyAppendSpans()

}

</script>

<style scoped>
.boardViewerBox {
    height: 100%;
    width: 100%;
    padding: 10px;
    
    position: absolute;
    top:0;
    left:0;
    pointer-events: none;
}
.boardViewerBox.visible {
    
    pointer-events: all;
}
.boardViewerBox {
    opacity: 0;
    transition: 300ms ease;
}
.boardViewerBox.visible {
    opacity: 1;
    transition: 300ms ease;
}
.boardViewer_contentBox {
    width: min(750px, 100%);
    height: 100%;
    
    background-color: var(--color-a);
    border-radius: 25px;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.285);
    pointer-events: none;
    overflow: hidden;
}
.boardViewer_contentBox .mediaText {
    width: min(450px, 100%);
    max-height: min(450px, 100%);
    padding: 20px;
    font-size: 18px;
    font-weight: 700;
    white-space: pre-wrap;
    overflow: scroll;
}
.mediaTextSpan {
    opacity: 1;
    transition: 300ms;
}
.viewerImg, .viewerVideo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.viewerImg{
    filter: blur(0.6px) brightness(0.9) contrast(1.2);
}
.viewerVideo {
    filter: blur(0.6px) brightness(0.8) contrast(1.5);
}
</style>