<template>
    <div class="container">
        <div class="row gap-3">
            <div class="col partner">
                <img class="logo-partner" src="../img/sponsor-1-2x.png" alt="">
                <TextSeparator class="separator"/>
                <p class="partner-info">
                    Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.
                </p>
                <a href="#" class="link">Visit Yoga Studio ></a>
            </div>

            <div class="col partner">
                <img class="logo-partner" src="../img/sponsor-2-2x.png" alt="">
                <TextSeparator class="separator"/>
                <p class="partner-info">
                    Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.
                </p>
                <a href="#" class="link">Join Fitness Center ></a>
            </div>

            <div class="col partner">
                <img class="logo-partner" src="../img/sponsor-3-2x.png" alt="">
                <TextSeparator class="separator"/>
                <p class="partner-info">
                    Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.
                </p>
                <a href="#" class="link">Learn about FC ></a>
            </div>

            <div class="col partner">
                <img class="logo-partner" src="../img/sponsor-4-2x.png" alt="">
                <TextSeparator class="separator"/>
                <p class="partner-info">
                    Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.
                </p>
                <a href="#" class="link">Visit Power Gym ></a>
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
.container{
    padding: 100px 0 150px;
    .partner{
        text-align: center;
        .separator{
            width: 200px;
            justify-content: center;
            margin: 0 auto;
            padding-bottom: 16px;
        }
        .logo-partner{
            width: 150px;
            margin: 20px;
        }
        .partner-info{
            font-size: 18px;
            color: gray;
            padding-bottom: 20px;
        }
        .link{
            text-decoration: none;
            color: currentColor;
            font-size: 18px;
            font-weight: bold;
            &:hover{
                color: blue;
            }
        }
    }

}

</style>

