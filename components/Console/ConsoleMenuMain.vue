<template>
    <div class="menuBoard">
        <div class="menuTabBox  flex justifyCenter gap10 alignCenter h100 wrap w100">
            <button class="menuTab consoleButton_reaction" @click="selectedBoard = 'about'">
                <span v-if="language == 'fr'">à propos</span>
                <span v-if="language == 'en'">about</span>
                <span v-if="language == 'bzh'">diwar benn</span>
            </button>
            <a href="https://www.teatrpiba.bzh/en/" class="menuTab consoleButton_reaction" target="_blank">Théâtre Piba</a>
            <a href="https://www.krismenn.com/" class="menuTab consoleButton_reaction" target="_blank">krismenn.com</a>
            <!-- <button @click="handleClick">clear</button> -->
        
        </div>

        <div class="">
            <ConsoleLanguageWidgetMain />
        </div>
    </div> 
</template>

<script setup>
const language = useState('language', () => "fr")


</script>

<style scoped>
.menuBoard {
    width: 100%;
    padding: 0 10px 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
}
.menuTabBox * {
    color: var(--color-a);
}

.menuTab {
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    padding: 7px 9px;
    border-radius: 5px;
}
</style>