<template>
    <div class="channel-yt">
        <div class="row m-0">
            <div class="col video-yt">
                <PlayButton class="play-component"/>
            </div>
            <div class="col container text">
                <p class="sub-title">Tune up your workouts</p>
                <h1 class="title">The best health & fiteness advice online</h1>
                <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat tenetur possimus sunt totam ab?</p>
                <button type="button" class="btn">
                    <span>
                        <font-awesome-icon icon="fa-brands fa-youtube" class="px-2"/>
                    </span>
                    Visit my YouTube channel
                </button>
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
    .video-yt{
        margin-top: -60px;
        background-image: url('../img/service15-2x.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 900px;
        border-radius: 0 0 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        .play-component{
            width: 100px;
            height: 100px;
        }
    }
    .container{
        padding: 120px 100px;
    }
    .text{
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        .sub-title{
            color: blue;
            font-size: 26px;
        }
        .title{
            font-size: 60px;
        }
        .info{
            padding-top:20px ;
            font-size: 24px;
            color: grey;
        }
        .btn{
            padding: 15px 35px;
            border-radius: 30px;
            font-weight: bold;
            color: white;
            margin-top: 30px;
            background-color: red;
            &:hover{
                background-color: rgba($color: #ff0000, $alpha: 0.7);
            }
        }
    }
            
</style>    