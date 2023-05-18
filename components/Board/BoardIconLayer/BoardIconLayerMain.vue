<template>
    <div class="BoardIconLayer_AbsoluteBox">
        <div class="iconLayerPage" :class="{ 'visible' : selectedIconPage == pageIndex}" v-for="(page, pageIndex) in pageCollection" :key="pageIndex">
            <div class="container full flex justifyCenter">

                <div class="iconLayerPageContent_4X5">
                    <div v-for="(media, iconIndex) in page" :key="iconIndex" class="iconTile"
                        :data-iconId="`${pageIndex}${iconIndex}`" 
                        :data-mediaId="media.id"
                        :class="[
                            { 'active': selectedMediaIcon == `${pageIndex}${iconIndex}` },
                            { 'faded': selectedFilter != media.media && selectedFilter != 'all'}
                        ]" 
                        @click="handleIconSelection">

                        <IconMediaMain v-if="media && media.media == 'video'"  >
                            <IconMediaVideo />
                        </IconMediaMain>

                        <IconMediaMain v-if="media && media.media == 'audio'" >
                            <IconMediaAudio />
                        </IconMediaMain>

                        <IconMediaMain v-if="media && media.media == 'image'" >
                            <IconMediaPhoto />
                        </IconMediaMain>

                        <IconMediaMain v-if="media && media.media == 'text'" >
                            <IconMediaVideo />
                        </IconMediaMain>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script setup>
import { newCollectionOfPages } from '@/utils/functions.js'
const appConfig = useAppConfig()

const selectedIconPage = useState('selectedPage', () => 0)
const selectedMediaIcon = useState('selectedMediaIcon', () => "")
const maxPage = useState('maxPage', () => 0)
const selectedFilter = useState('selectedFilter', () => "all")

const props = defineProps({
    selectedIconPage: {
        type: Number,
        default: 0
    }
})


const { data: medias } = await useAsyncData(
    "bastard_bits",
    async () => {
        const items = await $fetch(`${appConfig.directus.items}Bastard_bits`)

        return items.data
    }
)

const pageCollection = newCollectionOfPages("boards20", medias.value)
maxPage.value = pageCollection.length - 1

const handleIconSelection = (e) => {
    selectedMediaIcon.value = e.currentTarget.getAttribute('data-iconId')
}
</script>

<style scoped>
.BoardIconLayer_AbsoluteBox {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    
}
.iconLayerPage {
    width: 100%;
    height: 100%;
    padding: 10px;
    position: absolute;
    top:0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    transition: 500ms ease;
    pointer-events: none;
}
.iconLayerPage.visible {
    opacity: 1;
    transition: 500ms ease;
    pointer-events: all;
}
.iconLayerPageContent_4X5 {
    width: min(100%, 700px);
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.iconLayerPage .container {
    transition: 300ms ease;
}
</style>