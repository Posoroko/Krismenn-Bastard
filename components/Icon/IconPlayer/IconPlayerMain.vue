<template>
    <button class="playerButton" :data-action="action" @click="handleClick">
        <svg version="1.1" class="playerButtonSVG ejectSVG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">

            <rect y="0.03" class="playerIcon_background" width="48" height="48"/>

                <g class="ejectG" v-if="action == 'eject'">
                    <path class="playerIcon_path ejectIcon_path" d="M1.29,37.59h45.41c1,0.03,1.67-1.21,1.07-2.02L25.07,2.3c-0.48-0.7-1.65-0.7-2.13,0L0.22,35.57
                        C-0.36,36.38,0.28,37.62,1.29,37.59z M24,5.32l20.26,29.69H3.74L24,5.32z"/>
                    <path class="playerIcon_path ejectIcon_path" d="M46.71,43.71H1.29c-1.68,0.02-1.71,2.56,0,2.58h45.41C48.39,46.28,48.42,43.74,46.71,43.71L46.71,43.71z"/>
                </g>

                <g v-if=" action == 'pause'">
                    <path class="playerIcon_path" d="M15.55,0.03H5.57c-0.76,0-1.38,0.62-1.38,1.38v45.23c0,0.76,0.62,1.38,1.38,1.38h9.97
                        c0.76,0,1.38-0.62,1.38-1.38V1.42C16.93,0.65,16.31,0.03,15.55,0.03z M14.16,45.27H6.95V2.8h7.21V45.27z"/>
                    <path class="playerIcon_path" d="M42.43,0.03h-9.97c-0.76,0-1.38,0.62-1.38,1.38v45.23c0,0.76,0.62,1.38,1.38,1.38h9.97
                        c0.76,0,1.38-0.62,1.38-1.38V1.42C43.81,0.65,43.19,0.03,42.43,0.03z M41.04,45.27h-7.21V2.8h7.21V45.27z"/>
                </g>

                <g class="playButtonG" :class="[{ 'active': isPlaying && selectedMedia.id }, { 'pending': !isPlaying && selectedMedia.id }]" v-if=" action == 'play'">
                    <path class="playerIcon_path" d="M44.48,22.91L5.19,0.21C4.38-0.3,3.22,0.36,3.25,1.33v45.41c0,0.46,0.25,0.89,0.65,1.12
                        c0.4,0.23,0.89,0.23,1.29,0l39.29-22.71C45.33,24.7,45.33,23.37,44.48,22.91L44.48,22.91z M5.84,44.5V3.57l35.41,20.47L5.84,44.5
                        L5.84,44.5z"/>
                </g>
        </svg>
    </button>
</template>
<script setup>

const selectedMedia = useState('selectedMedia', () => { return { id: "", title: "", type: "", file: "" }})
const isPlaying = useState('isPlaying', () => false)

const handleClick = (e) => {
    const action = e.currentTarget.dataset.action
    if(action == 'eject' && isPlaying.value) {

        
        
        isPlaying.value = false

        //  wait for the css animation to finish in BoardViewer component
        setTimeout(() => {
            selectedMedia.value = { id: '', title: '', type: '', file: '' }
        }, 300)

        return
    }
    if(action == 'play' && selectedMedia.value.id) {
        localStorage.setItem(selectedMedia.value.id, true)

        isPlaying.value = true
    }
}
const props = defineProps({
    action: String
})

</script>

<style scoped>

.playerButton {
    height: 48px;
    width: 48px;
    /* background-color: #ffffff11; */
    background-color: #ffffff5d;
    border: 1px solid #00000019;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    display: grid;
    place-items: center;
    transition: 300ms ease;
    pointer-events: all;
}
.playerButton:hover {
    /* background-color: #9e9e9e2f; */
    background-color: #9e9e9e60;
    transition: 300ms ease;
}
.playerButtonSVG {
    height: 24px;
}
.playerIcon_background {
    fill: transparent;
}
.playerIcon_path{
    fill: var(--color-e);
    stroke: var(--color-e);
    stroke-width: 1px;
}
.playButtonG.active .playerIcon_path {
    fill: var(--green-default);
    stroke: var(--green-default);
}
.playButtonG.pending .playerIcon_path {
    fill: var(--orange-default);
    stroke: var(--orange-default);
}
</style>