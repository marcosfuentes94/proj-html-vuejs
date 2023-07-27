<template>
    <div class="bg-hero">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-9">
                    <h3 class="text-danger">Certifild fiteness professional</h3>
                    <h1 class="hero-title">Take control of your health</h1>
                    <TextSeparator/>
                    <p class="hero-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, itaque.</p>

                    <div class="hero-btn">
                        <button type="button" class="btn btn-primary btn-yt">
                            <font-awesome-icon icon="fa-brands fa-youtube" class="px-2"/>
                           <span>
                                Visit my YouTube channel
                           </span>
                        </button>
                        <button type="button" class="btn border btn-buy">
                           <span class="px-2">
                                Buy Avada today
                           </span>
                           <font-awesome-icon icon="fa-solid fa-arrow-right" />
                        </button>
                    </div>

                </div>
                <div class="col hero-play">
                    <PlayButton/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import PlayButton from './PlayButton.vue';
import TextSeparator from './TextSeparator.vue';
export default{
    components:{
        PlayButton,
        TextSeparator,
    }
}

</script>

<style scoped lang="scss">
.bg-hero{
    background-image: linear-gradient(90deg,black 45%,rgba(6,6,7,0) 75%),url('../img/slider82x-scaled.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 200px;
    color: white;
    .container{
        padding-top: 200px;
        .hero-title{
            font-size: 68px;
        }
        .hero-text{
            color: grey;
            font-size: 20px;
        }
        .hero-play{
            display: flex;
            justify-content: end;
            height: 100px;
            width: 100px;
        }
        .hero-btn > button{
            padding: 15px 35px;
            border-radius: 30px;
            margin-right: 15px;
            font-weight: bold;
            color: white;
            margin-top: 30px;
            font-size: 16px;
        }
        .hero-btn{
            .btn-yt:hover{
                background-color: red;
                border-color: red;
            }
            .btn-buy:hover{
                background-color: white;
                border-color: white;
                color: black;
            }

                
        }
    }
}

</style>