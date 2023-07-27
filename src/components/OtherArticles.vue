<template>
    <div class="container">
        <div class="row py-4">
            <h3 class="col">Latest articles</h3>
            <p class="col d-flex justify-content-end mb-0 read-article"> Read all articles ></p>
        </div>
        <div class="row gap-4">
            <div class="card col">
                <img src="../img/blog4-2x.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">The best protein shake</h3>
                    <p class="card-subtitle">By admin | November 26th, 2019 | Gym</p>
                </div>
            </div>

            <div class="card col">
                <img src="../img/blog1-2x.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">Ultimate cardio workout</h3>
                    <p class="card-subtitle">By admin | November 26th,2019 | Gym</p>
                </div>
            </div>

            <div class="card col">
                <img src="../img/blog3-2x.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">New juices availble now</h3>
                    <p class="card-subtitle">By admin | November 26th,2019 | Gym</p>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.container{
    padding-top: 140px;
    margin-bottom: 100px;
    .read-article{
        &:hover{
            color: blue;
        }
    }

    .card{
        width: 400px;
        border: none;
        position: relative;
        .card-body{
            margin-top: 20px;
            .card-title{
                font-size: 26px;
            }
            .card-subtitle{
                font-size: 18px;
                color: gray;
            }
        }
    }
}
</style>