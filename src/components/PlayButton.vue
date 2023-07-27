<template>
    <div class="play">
        <font-awesome-icon icon="fa-solid fa-play"/>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.play {
    max-height: 120px;
    max-width: 120px;
    background-color: white;
    color: blue;
    font-size: 20px;
    padding: 30px 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: color 0.3s, border 0.3s;

    &:hover {
        color: red;
        border: 2px solid red;
        animation: pulse 1s infinite;
    }
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>