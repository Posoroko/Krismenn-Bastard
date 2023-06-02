<template>
    <section class="consoleContainer boardStyles relative consoleColor flex column">       
        <ConsoleBoardButtons />
        
        <ConsolePlayerMain v-if="selectedConsoleBoard == 'dashboard'" />

        <ConsoleMenuMain v-if="selectedConsoleBoard == 'menu'" />
    </section>
</template>

<script setup>
const selectedMediaIcon = useState('selectedMediaIcon', () => { return { id: "", title: "", type: "", file: "" } })

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

</style>