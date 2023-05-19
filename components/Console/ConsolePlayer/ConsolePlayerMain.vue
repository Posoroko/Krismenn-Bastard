<template>
    <div class="full flex alignCenter justifyCenter gap20">
        <button class="playerButton">
            <IconPlayerPlay />
        </button>

        <button class="playerButton">
            <IconPlayerPause />
        </button>

        <button class="playerButton">
            <IconPlayerEject />
        </button>
    </div>
</template>

<style>
.playerButton {
    height: 48px;
    width: 48px;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
}

</style>