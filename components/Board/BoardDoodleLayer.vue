<template>
    <div class="doodleLayer_absolute absoluteFull flex wrap">

        <div class="doodleCell centered">
            <img class="doodle_arrow01" src="/images/doodles/page/arrow01.png" alt="">
        </div>

        <div class="doodleCell flex justifyCenter alignEnd">
            <img class="doodle_figure01" src="/images/doodles/page/figure01.png" alt="">
        </div>

        <div class="doodleCell centered">
            <img class="doodle_bang" src="/images/doodles/page/bang.png" alt="">
        </div>
    
        <div class="doodleCell">
            <img class="doodle_bang" src="/images/doodles/page/wip.png" alt="">
            <img class="doodle_bang" src="/images/doodles/page/note01.png" alt="">
        </div>

        

    </div>
</template>

<script setup>

</script>

<style scoped>
.doodleLayer_absolute {
    pointer-events: none;
}
.doodleCell {
    width: 50%;
    height: 50%;
}
.doodle_arrow01 {
    opacity: 0.3;
}
.doodle_figure01 {
    opacity: 0.1;
    filter: brightness(0.9);
}
.doodle_bang {
    height: 40%;
    opacity: 0.3;
}
</style>