<template>
    <section class="boardMain_container boardStyles">
        <div class="boardMain_contentBox relative">
            <BoardIconLayerMain :selectedIconPage="selectedIconPage" />
        </div>
        
        <div class="boardMain_pageBrowserBox flex justifyCenter alignCenter gap30">
            <button class="pageArrow icon pointer h100 flex alignCenter" :class="{ 'faded' : selectedIconPage == 0}" @click="browsePages" data-way="down">
                    arrow_back
            </button>
            <p class="pageNum centered h100">{{ `${selectedIconPage + 1}/${maxPage + 1}` }}</p>
            <button class="pageArrow icon pointer h100" :class="{ 'faded' : selectedIconPage == maxPage}" @click="browsePages" data-way="up">
                arrow_forward
            </button>
        </div>
    </section>

</template>

<script setup>
const selectedIconPage = useState('selectedPage', () => 0)
const maxPage = useState('maxPage', () => 0)

const browsePages = (e) => {
    const way = e.currentTarget.getAttribute('data-way')
    if(way == "up" && selectedIconPage.value < maxPage.value) {
        selectedIconPage.value++
        return
    }

    if(way == "down" && selectedIconPage.value > 0) {
        selectedIconPage.value--
    }
    
}
</script>

<style scoped>
.boardMain_container {
    height: calc(100% - var(--console-height));
    position: relative;
    overflow: hidden;
}
.boardMain_contentBox {
    height: calc(100% - 50px);
    overflow: hidden;
}
.boardMain_pageBrowserBox {
    height: 50px;
}
.pageArrow {
    color: var(--color-d);
    font-size: 20px;
}
.pageArrow.faded {
    opacity: 0.3;
}
</style>