<template>
    <nuxtPage/>
    <Transition>
        <IntroMain/>
    </Transition>
    
</template>

<script setup>
screen.orientation.lock('portrait-primary').then(() => {
    console.log('promise!')
  console.log('Orientation locked')
}).catch((err) => {
  console.log(err)
})



</script>

<style scoped>
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-leave-to {
  opacity: 0;
}
</style>