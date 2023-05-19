<template>
    <nav class="menuBoard absoluteFull centered">
        <ul class="flex column alignCenter justifyCenter gap20">
            <p>eric</p>

            <p>anne</p>
        </ul>
    </nav>
</template>

<style scoped>
.menuBoard {
    background-color: rgba(63, 43, 43, 0.233);
    /* opacity: 0.5; */
    backdrop-filter: blur(1px) ;
    z-index: 100000;
}
.menuBoard ul {
    height: 50%;
    width: 50%;
    background-color: var(--color-d);
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.75);
}
.menuBoard * {
    color: var(--color-a);
}
</style>