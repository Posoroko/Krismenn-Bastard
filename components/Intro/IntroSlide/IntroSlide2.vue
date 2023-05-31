<template>
    <div class="introSlide absolute centered">
        <p class="introText">
            Un cahier, des notes, des idées, pêle-mêle...  Dans la constructin d'un spectacle, le idées floues sont maitresses.
        </p>
    </div>
</template>

<script setup>
const introSlide = useState('introSlide', () => 1)
const introPlaying = useState('introPlaying', () => true)
const slideShow = () => {
    introSlide.value = 2
    console.log('slideShow')
}



onMounted(() => {
    console.log('mounted')
    setTimeout(() => {
        introPlaying.value= false
    }, 9000)

})
</script>

<style scoped>
.introSlide {
    width: 100%;
    height: 100%;
}
.introText {
    width: min(400px, 80%);
    font-size: clamp(28px, 3vw, 40px);
    /* text-align: center; */
    color: var(--color-a);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    filter: blur(0.6px);
    animation-name: inAndOut;
    animation-duration: 6s;
    animation-delay: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
}
@keyframes inAndOut {
    0% { opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
}
</style>