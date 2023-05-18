<template>
<div class="iconMediaBox relative full">
    <slot></slot>

    <div class="selectionCircleBox">

    </div>
</div>
</template>

<style scoped>
.selectionCircleBox {
    position: absolute;
    height: 100%;
    aspect-ratio: 1/1;
    border-radius: 500px;
    pointer-events: none;
}


</style>