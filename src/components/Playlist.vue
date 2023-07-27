<template>
    <div class="container">
        <div class="row py-4">
            <h3 class="col">Featured playlist</h3>
            <p class="col d-flex justify-content-end mb-0 view-video"> View all videos ></p>
        </div>
        <div class="row gap-4">
            <div class="card col">
                <div class="cover">
                    <PlayButton class="play-component"/>
                    <img src="../img/video2-2x.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h3 class="card-title">Thighs & glute workout</h3>
                    <p class="card-subtitle">Increase your mobility</p>
                </div>
            </div>

            <div class="card col">
                <div class="cover">
                    <PlayButton class="play-component"/>
                    <img src="../img/video7-2x.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h3 class="card-title">Lift, firm & perk up</h3>
                    <p class="card-subtitle">Feel young again</p>
                </div>
            </div>

            <div class="card col">
                <div class="cover">
                    <PlayButton class="play-component"/>
                    <img src="../img/video9-2x.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                    <h3 class="card-title">Slim & trim your waist</h3>
                    <p class="card-subtitle">Shed those exta pounds</p>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
import PlayButton from './PlayButton.vue';
export default{
    components:{
        PlayButton,
    }
}
</script>

<style scoped lang="scss">
.container{
    padding-top: 140px;
    margin-bottom: 100px;
    .view-video{
        &:hover{
            color: blue;
        }
    }

    .card{
        width: 400px;
        border: none;
        position: relative;
        &:hover{
            .card-title{
                color: blueviolet;
                font-weight: bold;
            }
        } 
        .cover{
            .play-component{
                position: absolute;
                top: 25%;
                right: 50%;
                transform: translate(50%,25%);
                width: 10px;
                font-size: 16px;
                padding: 15px 25px;
            }
            &:hover{
                border-radius: 50px;
                .play-component{
                    display: none;
                }

            }
            img{
                border-radius: 0 0 50px;
            }
        }
        .card-body{
            text-align: center;
            margin-top: 20px;
            .card-title{
                font-size: 22px;
            }
            .card-subtitle{
                font-size: 16px;
                color: blue;
            }
        }
    }
}
</style>