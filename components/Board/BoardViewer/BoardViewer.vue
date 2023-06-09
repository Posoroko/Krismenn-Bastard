<template>
    <div class="boardViewerBox backdropColor backdropBlur centered"
        :class="{ 'visible' : isPlaying }">
        
        <!-- <IconMiscCloseButton /> -->

        <div class="boardViewer_contentBox flex justifyCenter alignCenter" ref="boardViewer_contentBox">
            <div class="mediaBackdrop mediaTextBackdrop centered" v-if="selectedMedia.text">
                <p class="mediaText" ref="mediaText">
                
                </p>
            </div>

            <div class="mediaImageBackdrop centered" v-else>
                <img class="viewerImg" v-if="selectedMedia.type == 'image'" :src="`${appConfig.directus.assets}${selectedMedia.file}?key=viewer800`" alt="">

                <video autoplay playsinline muted loop class="viewerVideo" v-if="selectedMedia.type == 'video'" >
                    <source :src="`${appConfig.directus.assets}${selectedMedia.file}`" type="video/webm">
                </video> 

                <!-- <video autoplay loop class="viewerVideo" v-if="selectedMedia.type == 'video'" src="/videos/road_1067x600.webm"></video>  -->
            </div>
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
        return delay
    }
    let counter = 0

    const slowlyAppendSpans = () => {
        if (mediaText.value && counter < text_array.value.length) {
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
    /* padding: 10px; */
    
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
    width: 100%;
    height: 100%;
    padding: 5px;
    border: 2px solid rgba(26, 18, 11, 0.596);
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.285);
    box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.473);
    pointer-events: none;
    overflow: hidden;
}
.mediaText {
    padding: 20px;
    font-size: 18px;
    font-weight: 700;
    white-space: pre-wrap;
    /* overflow: scroll; */
    
}
.mediaImageBackdrop {
    width: 100%;
    height: 100%;
}

.mediaTextBackdrop {
    width: min(450px, 100%);
    height: min(600px, 100%);
    background-color: var(--color-a);
    border-radius: 10px;
    animation: flicker 28ms infinite;
    text-shadow: 1px 1px 2px rgba(255, 218, 188, 0.678);
    filter: blur(0.5px) brightness(0.9) contrast(2);
    box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.514);
    border-radius: 10px;
    background-image: url('/textures/grain.png');
}

@keyframes flicker {
    0% {
        opacity: 0.775;
        text-shadow: 1px 1px 2px rgb(255, 218, 188);
    }
    50% {
        opacity: 0.8;
        text-shadow: 1px 1px 2px rgba(255, 220, 192, 0);
    }
    100% {
        opacity: 0.79;
        text-shadow: 1px 1px 2px rgb(255, 220, 192);
    }
}
@keyframes imageFlicker {
    0% {
        /* opacity: 0.98; */
        filter: blur(0.1px) brightness(0.9) sepia(50%) contrast(1);
    }
    50% {
        /* opacity: 1; */
        filter: blur(0.6px) brightness(0.9) sepia(50%) contrast(1.1);
    }
    100% {
        /* opacity: 0.98; */
        filter: blur(0.1px) brightness(0.9) sepia(50%) contrast(1);
    }
}
.viewerImg{
    width: min(600px, 100%);
    height: min(450px, 100%);
    border-radius: 10px;
    object-fit: contain;
    filter: blur(0.1px) brightness(0.9) sepia(50%) contrast(1) drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.514));
    animation: imageFlicker 28ms infinite;
}
.viewerVideo {
    filter: blur(0.6px) brightness(1) sepia(20%) contrast(1.2) drop-shadow(1px 2px 10px rgba(0, 0, 0, 0.514));
    width: min(600px, 100%);
    height: min(450px, 100%);
    border-radius: 10px;
    object-fit: cover;
    animation: flicker 28ms infinite;
}
</style>