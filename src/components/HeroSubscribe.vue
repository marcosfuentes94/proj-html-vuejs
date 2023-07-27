<template>
    <div class="bg-hero">
        <div class="container">
            <div class="row align-items-center justify-content-start">
                <div class="col-8">
                    <h3 class="text-danger">Join our mailing list today</h3>
                    <h1 class="hero-title">Insider offers & flash sales in your inbox every week</h1>
                    <TextSeparator/>

                    <div class="hero-btn">
                        <input type="email" class="form-control email" aria-describedby="emailHelp" placeholder="Insert your e-mail">
                        <button type="button" class="btn btn-primary">
                            Subscribe
                        </button>
                    </div>

                    <p class="hero-text">
                        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus dolor sit amet, consectetur adipiscing elit sed porttitor lectus.
                    </p>


                </div>

            </div>
        </div>

    </div>
</template>

<script>
import TextSeparator from './TextSeparator.vue';
export default{
    components:{
        TextSeparator,
    }
}
</script>

<style scoped lang="scss">
.bg-hero{
    background-image: linear-gradient(90deg,black 45%,rgba(6,6,7,0) 75%),url('../img/banner1-2x.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 200px;
    color: white;
    margin-top: 100px;
    .container{
        padding-top: 100px;
        .hero-title{
            font-size: 54px;
        }
        .hero-text{
            color: grey;
            font-size: 20px;
        }
        .hero-btn{
            display: flex;
            .email{
                margin: 30px 0;
                border-radius: 50px;
                padding: 0 20px;
                color: grey;
            }

        }
        .hero-btn > button{
            padding: 12px 90px;
            border-radius: 30px;
            margin-right: 15px;
            font-weight: bold;
            color: white;
            margin: 30px;
            &:hover{
                background-color: rgba($color: #ff0000, $alpha: 0.4);
                border-color: rgba($color: #ff0000, $alpha: 0.4);
            }
        }
    }
}

</style>