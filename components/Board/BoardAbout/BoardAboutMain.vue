<template>
    <div class="aboutContainer absoluteFull centered pad10">
        <div class="aboutBox relative flex column gap20 pad20">
            <h2 class=" aboutTitle">BASTARD</h2>

            <p>{{ aboutTexts.appDescription[language] }}</p>
            
            <p>{{ aboutTexts.krismennPresentation[language] }}</p>

            <p>{{ aboutTexts.showDate[language] }}</p>

            <div class="externalLinkBox flex wrap">
                <div class="flex justifyAround">
                    <a target="_blank" class="serviceLinks" href="https://play.spotify.com/album/0hEBkLpetOtfc0thvtPKKu?play=true&utm_source=open.spotify.com&utm_medium=open">
                        <IconMiscStreaming name="spotify" />
                    </a>

                    <a target="_blank" class="serviceLinks" href="http://www.deezer.com/album/15334697?utm_source=deezer&utm_content=album-15334697&utm_term=16212501_1486977741&utm_medium=web">
                        <IconMiscStreaming name="deezer" />
                    </a>

                    <a target="_blank" class="serviceLinks" href="https://www.youtube.com/user/krismenn29">
                        <IconMiscStreaming name="youtube" />
                    </a>
                </div>

                <div class="flex justifyAround">
                    <a target="_blank" class="serviceLinks" href="https://itunes.apple.com/fr/album/shabituer-lobscurite-n-om/id1204853220?ign-mpt=uo%3D4&ls=1&app=music&at=1l3v3cP&ct=ozp8zb">
                        <IconMiscStreaming name="appleMusic" />
                    </a>

                    <a target="_blank" class="serviceLinks" href="https://www.facebook.com/Krismenn/">
                        <IconMiscStreaming name="facebook" />
                    </a>

                    <a target="_blank" class="serviceLinks" href="https://www.instagram.com/krismenn/">
                        <IconMiscStreaming name="instagram" />
                    </a>
                </div>
            </div>

            <div>
                <p>dev. : <a href="https://www.posoroko.com">posoroko</a></p>
                <p>design. : <a href="https://www.instagram.com/fractale_veloce/"></a>fractale_veloce</p>
            </div>

            <span @click="closeBoard" class="icon topRightButton">close</span>
        </div>
    </div>
</template>

<script setup>
import { aboutTexts } from '@/assets/content/texts.js'
const selectedBoard = useState('selectedBoard', () => "icons")
const selectedConsoleBoard = useState('selectedConsoleBoard', () => "dashboard")
const language = useState('language', () => "fr")

const closeBoard = () => {
    selectedBoard.value = "icons"
    selectedConsoleBoard.value = "dashboard"
}
</script>

<style scoped>
.aboutTitle {
    padding: 10px 50px;
}
.aboutContainer{
    background-color: rgba(0, 0, 0, 0.829);
    overflow: scroll;
}

.aboutBox {
    width: min(800px, 100%);
    /* min-height: min(500px, 100%); */
    background-color: var(--color-a);
    border-radius: 10px;
}
.aboutBox p {
    font-size: 15px;
}
.externalLinkBox div{
    flex-grow: 1;
}
.serviceLinks {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
}
</style>