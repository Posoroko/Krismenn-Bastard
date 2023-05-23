<template>
    <span class="icon topRightButton lightText" @click="handleClick">close</span>
</template>

<script setup>
const selectedMedia = useState('selectedMedia', () => { return { id: "", title: "", type: "", file: "" } })
const isPlaying = useState('isPlaying', () => false)

const handleClick = () => {
    selectedMedia.value.id = ''
    isPlaying.value = false
}



</script>