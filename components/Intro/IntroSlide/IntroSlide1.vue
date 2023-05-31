<template>
    <div class="introSlide absolute centered" >
        <video autoplay loop class="introVideo" src="/videos/road_1067x600.webm"></video>

        <h1 class="introTitle video bastard">BASTARD</h1>
        <h1 class="introTitle video krismenn">KRISMENN</h1>
    </div>
</template>

<script setup>
const introSlide = useState('introSlide', () => 1)

const slideShow = () => {
    introSlide.value = 2
    console.log('slideShow')
}



onMounted(() => {
    console.log('mounted')
    setTimeout(() => {
        console.log('timeout 14sec')
        slideShow()
    }, 14000)

})

</script>

<style scoped>
.introTitle {
    font-size: 100px;
    color: var(--orange-default);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(0.6px);
    animation-name: inAndOut;
    animation-duration: 5s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
}
.bastard {
    animation-delay: 2s;
    
}
.krismenn {
    animation-delay: 7s;
    
}
@keyframes inAndOut {
    0% { opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
}

.introVideo {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    filter: brightness(0.9) blur(0.6px) contrast(1.3);
}
.introTitle.video {
    mix-blend-mode: color-dodge;
}
</style>