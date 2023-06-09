<template>
    <div class="BoardIconLayer_AbsoluteBox">
        <div class="iconLayerPage"  :class="{ 'visible' : selectedIconPage == pageIndex}" 
                                    v-for="(page, pageIndex) in pageCollection" :key="pageIndex">
            <div class="container full flex justifyCenter">

                <div class="iconLayerPageContent_4X5">
                    <div v-for="(media, iconIndex) in page" :key="iconIndex" class="iconTile">

                        <IconMediaMain v-if="media"  
                            :mediaId="media.id"
                            :mediaType="media.type"
                            :pageIndex="pageIndex"
                            :iconIndex="iconIndex"
                            :mediaIsSelected="selectedMedia.id === media.id"/>
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
const selectedMedia = useState('selectedMedia', () => { return { id: "", title: "", type: "", file: "" } })

const maxPage = useState('maxPage', () => 0)
const mediaCollection = useState('mediaCollection', () => [])



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
mediaCollection.value = pageCollection
maxPage.value = pageCollection.length - 1


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