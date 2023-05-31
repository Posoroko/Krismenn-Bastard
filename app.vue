<template>
    <nuxtPage/>
    <Transition>
        <IntroMain/>
    </Transition>
    
</template>

<script setup>



</script>

<style scoped>
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-leave-to {
  opacity: 0;
}
</style>