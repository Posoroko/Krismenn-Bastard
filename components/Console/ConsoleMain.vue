<template>
    <section class="consoleContainer boardStyles relative consoleColor">
        <!-- <div class="boardTexture"></div> -->
        
        <div class="consoleDrawer" 
            :class="[   { 'position_menu' : selectedConsoleBoard == 'menu'},
                        { 'position_dashboard' : selectedConsoleBoard == 'dashboard'}]">
            <div class="consoleBoard flex column">        
                <div class="topBox flex w100 justifyCenter">
                    <button class="consoleBoardBtn active">
                        BASTARD
                    </button>

                    <button class="consoleBoardBtn inactive pointer"  @click="selectedConsoleBoard = 'menu'">
                        MENU
                    </button>
                </div>

                <ConsolePlayerMain />

            </div>

            <div class="consoleBoard flex justifyCenter">
                <div class="menuBoard_centerBox ">
                    <div class="flex ">
                        <button class="consoleBoardBtn inactive pointer" @click="selectedConsoleBoard = 'dashboard'">
                            BASTARD
                        </button>

                        <button class="consoleBoardBtn active" @click="selectedConsoleBoard = 'menu'">
                            MENU
                        </button>
                    </div>

                    <div class="menuTabBox  flex justifyEvenly wrap w100">
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
                

            </div>
        </div>
    </section>
</template>
<script setup>
const selectedMediaIcon = useState('selectedMediaIcon', () => { return { id: "", title: "", type: "", file: "" } })
const selectedFilter = useState('selectedFilter', () => "all")
const selectedBoard = useState('selectedBoard', () => "icons")
const selectedConsoleBoard = useState('selectedConsoleBoard', () => "dashboard")
const language = useState('language', () => "fr")

const handleClick = () => {
    console.log("clear")
    localStorage.clear()
}

</script>
<style scoped>
.consoleContainer {
    height: var(--console-height);
    overflow: hidden;
}
.consoleDrawer.position_dashboard {
    transform: translateY(0%);
    transition: 300ms ease;
}
.consoleDrawer.position_menu {
    transform: translateY(-50%);
    transition: 300ms ease;
}
.consoleBoard {
    height: var(--console-height);
}
.consoleBoardBtn {
    width: 96px;
    height: 48px;
    
    position: relative;
}
.consoleBoardBtn.inactive {
    font-size: 22px;
    font-weight: 400;
    color: var(--color-a);
    opacity: 0.5;
}
.consoleBoardBtn.active {
    font-size: 22px;
    font-weight: 900;
    color: var(--orange-default);
}

.consoleBoardBtn::after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}
.consoleBoardBtn.inactive::after {
    background-color: white;
}
.consoleBoardBtn.active::after {
    background-color: rgb(255, 198, 198);
    box-shadow: 0 0 10px 2px rgba(255, 108, 108, 0.562);
    border: 1px solid rgba(247, 22, 22, 0.452);
}

.menuBoard_centerBox {
    width: 100%;
    height: 100%;
    padding: 0 10px 5px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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