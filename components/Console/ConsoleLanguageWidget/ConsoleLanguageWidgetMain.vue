<template>
    <div class="languageButtonContainer full flex justifyCenter">
        <button class="languageWidgetButton" @click="language = 'fr'">
            fr
        </button>

        <button class="languageWidgetButton" @click="language ='en'">
            en
        </button>

        <button class="languageWidgetButton" @click="language = 'bzh'">
            bzh
        </button>
    </div>
</template>

<script setup>
const language = useState('language', () => "fr")
</script>

<style scoped>
.languageWidgetButton {
    width: 48px;
    font-size: 12px;
    color: var(--color-a);
    /* padding: 5px; */
    cursor: pointer;
    border-radius: 5px;
    transition: 300ms ease;
}
.languageWidgetButton:hover {
    background-color: var(--color-b);
    transition: 300ms ease;
}
</style>