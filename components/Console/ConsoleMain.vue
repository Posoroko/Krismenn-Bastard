<template>
    <section class="consoleContainer boardStyles relative">
        <div class="boardTexture"></div>
        
        <div class="consoleDrawer" 
            :class="[   { 'position_menu' : selectedConsoleBoard == 'menu'},
                        { 'position_dashboard' : selectedConsoleBoard == 'dashboard'}]">
            <div class="consoleBoard flex justifyCenter">
                <div class="dashboard_leftBox">

                </div>
        
                <div class="dashBoard_centerBox">
                    <button class="consoleBoardBtn active">
                        Bastard
                    </button>
                    
                    <button class="consoleBoardBtn inactive pointer"  @click="selectedConsoleBoard = 'menu'">
                        menu
                    </button>
                </div>

                <div class="dashboard_rightBox">
                    <ConsolePlayerMain />
                </div>
            </div>

            <div class="consoleBoard flex justifyCenter">
                <div class="menuBoard_leftBox">

                </div>

                <div class="menuBoard_centerBox ">
                    <button class="consoleBoardBtn active" @click="selectedConsoleBoard = 'menu'">
                        menu
                    </button>

                <div class="menuTabBox flex justifyEvenly w100">
                    <p>about</p>
                    <p>Théâtre Piba</p>
                    <p>krismenn.com</p>
                </div>

                    <button class="consoleBoardBtn inactive pointer" @click="selectedConsoleBoard = 'dashboard'">
                        Bastard
                    </button> 
                </div> 
                
                <div class="menuBoard_rightBox">

                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const selectedMediaIcon = useState('selectedMediaIcon', () => "")
const selectedFilter = useState('selectedFilter', () => "all")
const selectedBoard = useState('selectedBoard', () => "icons")
const selectedConsoleBoard = useState('selectedConsoleBoard', () => "dashboard")



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
    font-size: 12px;
    font-weight: 400;
}
.consoleBoardBtn.active {
    font-size: 18px;
    font-weight: 900;
}
.consoleBoardBtn.inactive::after {
    content: "";
    position: absolute;
    bottom: 30%;
    top: 60%;
    left: 30%;
    right: 30%;
    background-color: rgba(107, 107, 107, 0.397);
}
.consoleBoardBtn.active::after {
    content: "";
    position: absolute;
    bottom: 30%;
    top: 60%;
    left: 30%;
    right: 30%;
    background-color: rgba(212, 96, 0, 0.397);
}
.dashboard_leftBox, .dashboard_rightBox {
    width: 20%;
    /* background-color: #2e060638; */
    flex-grow: 1;
}
.dashBoard_centerBox {
    width:30%;
    height: 100%;
    /* padding: 10px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}
.menuBoard_centerBox {
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    gap: 20px;
}

</style>