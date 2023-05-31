<template>
    
        <div class="introContainer absoluteFull centered" v-if="introPlaying">
            <Transition>
                <IntroSlide1 v-if="introSlide == 1" />
            </Transition>
            <Transition>
                <IntroSlide2  v-if="introSlide == 2" />
            </Transition>

            <button class="lightText topRightButton" @click="changeSlide">next</button>
            <button class="lightText absolute right0 bottom0 flex alignCenter pointer" @click="introPlaying = false">skip <span class="icon lightText">arrow_forward</span> </button>
        
        </div>
    
    
</template>
<script setup>
const introPlaying = useState('introPlaying', () => true)
const introSlide = useState('introSlide', () => 1)
const numberOfSlides = 2

const changeSlide = () => {
    if (introSlide.value < numberOfSlides) {
        introSlide.value++
    } else {
        introPlaying.value = false
        return
    }
}



</script>

<style scoped>
.introContainer {
    background-color: var(--color-e);
}
.introText {
    color: var(--color-a);
}


.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>