<template>
    <div class="topBox flex w100 justifyCenter gap10 pad5">
        <button class="consoleBoardBtn consoleButton_reaction consoleButton_basicStyles bastard" :class="[selectedConsoleBoard == 'dashboard' ?  'active' : 'inactive']" data-name="dashboard" @click="handleClick">
            BASTARD
        </button>

        <button class="consoleBoardBtn consoleButton_reaction consoleButton_basicStyles menu" :class="[selectedConsoleBoard == 'menu' ? 'active' : 'inactive']" data-name="menu"  @click="handleClick">
            MENU
        </button>
    </div>

</template>
<script setup>
const selectedBoard = useState('selectedBoard', () => "icons")
const selectedConsoleBoard = useState('selectedConsoleBoard', () => "dashboard")

const handleClick = (e) => {
    selectedConsoleBoard.value = e.target.dataset.name
}
</script>
<style scoped>
.consoleBoardBtn {
    width: 140px;
    padding: 5px 0px;
    isolation: isolate;
    position: relative;
}
.consoleBoardBtn.inactive {
    font-size: 20px;
    font-weight: 400;
    color: var(--color-a);
    opacity: 0.5;
    cursor: pointer;
}
.consoleBoardBtn.active {
    font-size: 20px;
    font-weight: 900;
    color: var(--orange-default);
}
.consoleBoardBtn.bastard {
    padding-left: 25px;
}
.consoleBoardBtn.menu {
    padding-right: 25px;
}
.consoleBoardBtn::after {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
}
.consoleBoardBtn.bastard::after {
    top: 50%;
    left: 10px;
    transform: translate(-0%, -50%);
}
.consoleBoardBtn.menu::after {
    top: 50%;
    right: 10px;
    transform: translate(0%, -50%);
}
.consoleBoardBtn.inactive::after {
    background-color: white;
}
.consoleBoardBtn.active::after {
    background-color: rgb(255, 198, 198);
    box-shadow: 0 0 10px 2px rgba(255, 108, 108, 0.562);
    border: 1px solid rgba(247, 22, 22, 0.452);
}
</style>