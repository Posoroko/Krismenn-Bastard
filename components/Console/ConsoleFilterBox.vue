<template>
    <div class="full flex alignCenter justifyCenter gap5">
        <div class="filter" :class="{ 'active' : selectedFilter == 'video'}" @click="handleFilterClick('video')">
            <IconMediaMain>
                <IconMediaVideo />
            </IconMediaMain>
        </div>

        <div class="filter" :class="{ 'active': selectedFilter == 'audio' }" @click="handleFilterClick('audio')">
            <IconMediaMain>
                <IconMediaAudio />
            </IconMediaMain>
        </div>

        <div class="filter" :class="{ 'active': selectedFilter == 'image' }" @click="handleFilterClick('image')">
            <IconMediaMain>
                <IconMediaPhoto />
            </IconMediaMain>
        </div>
    </div>
</template>
<script setup>
const selectedFilter = useState('selectedFilter', () => "all")

const handleFilterClick = (type) => {
    if(selectedFilter.value == type){
        selectedFilter.value = "all"
        return
    }
    selectedFilter.value = type
    console.log(selectedFilter.value)
}

</script>

<style scoped>
.filter {
    height: 48px;
    width: 48px;
}
.filter.active:deep(.iconMediaBox .selectionCircleBox){
    outline: 1px solid red;
}
</style>