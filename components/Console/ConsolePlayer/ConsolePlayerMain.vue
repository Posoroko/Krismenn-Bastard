<template>
    <div class="consolePlayerBox flex w100 alignCenter justifyEvenly">
        <IconPlayerMain action="play" />

        <ConsolePlayerScreen />

        <IconPlayerMain action="eject" />
    </div>
</template>
<script setup>

</script>
<style scoped>
.consolePlayerBox {
    flex-grow: 1;
    padding-bottom: 15px;
}

</style>