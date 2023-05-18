<template>
    <section class="consoleContainer boardStyles flex justifyCenter">
        <div class="consoleBox consoleFilterBox">
            <ConsoleFilterBox />
        </div>
        
        <div class="consoleBox consoleCenterBox flex column alignCenter justifyCenter gap20">
            <h1 class="fS18">Bastard</h1>
            <p class="fS16">{{ selectedMediaIcon }}</p>
            <button>
                menu
            </button>
        </div>

        <div class="consoleBox consoleControleBox">
            {{ selectedFilter }}
        </div>
    </section>
</template>
<script setup>
const selectedMediaIcon = useState('selectedMediaIcon', () => "")
const selectedFilter = useState('selectedFilter', () => "all")

</script>
<style scoped>
.consoleContainer {
    height: var(--console-height);
}

.consoleContainer .consoleBox {
    height: 100%;
    width: 25%;
}
</style>