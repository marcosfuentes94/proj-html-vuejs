<template>
    <div class="bg-hero">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-8">
                    <h1 class="hero-citation">“I’ve failed over and over again in my life. And that is why I succeed.”</h1>

                    <TextSeparator style="margin: 0px auto;justify-content: center;"/>

                    <p class="hero-text">
                        Arcu auctor gravida nisl, congue sit nisi tincidunt eget proin. In lacinia lacus donec sed massa in ipsum eros, tristique. Gravida suspendisse etiam in iaculis
                    </p>
                    <button type="button" class="btn btn-primary">
                        Buy today
                    </button>
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
    background-image:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%),url('../img/banner2-2x.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 200px;
    color: white;
    margin-top: 100px;
    text-align: center;
    .container{
        padding-top: 200px;
        .hero-citation{
            font-size: 54px;
        }
        .separator{
            padding: 30px 0;
        }
        .hero-text{
            color: grey;
            font-size: 24px;
        }
        .btn{
            padding: 12px 90px;
            border-radius: 30px;
            margin-right: 15px;
            font-weight: bold;
            color: white;
            margin: 30px;
            &:hover{
                background-color: rgba($color: #ff0000, $alpha: 0.7);
                border: 1px solid red;
            }
        }
    }
}

</style>