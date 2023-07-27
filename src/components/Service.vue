<template>
    <div class="bg-service">
        <div class="container">
            <div class="row">
                <div class="card">
                    <img src="../img/service6-2x.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h2 class="card-title">Crossfit Workout</h2>
                        <h3 class="card-text">Push your limits</h3>
                    </div>
                </div>

                <div class="card">
                    <img src="../img/box1-2x.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h2 class="card-title">New gym apparel</h2>
                        <h3 class="card-text">Look good, feel good</h3>
                    </div>
                </div>

                <div class="card">
                    <img src="../img/box3-2x.jpg" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h2 class="card-title">Team training</h2>
                        <h3 class="card-text">Find a partner</h3>
                    </div>
                </div>
            </div>
            <div class="container citation">
                <h1 class="text-citation">
                    “How you respond to the service in the second half will determine what you become after the game,
                    whether you are a winner or a loser.”
                </h1>
                <TextSeparator style="margin: 0 auto;justify-content: center;"/>
                <div class="person-citation">
                    <img class="profile-citation" src="../img/avatar-1-2x.jpg" alt="">
                    <h3 class="name-citation fw-bold">Brad Johnson</h3>
                    <h3 class="city-citation">Las Vegas</h3>
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

<style lang="scss" scoped>
.bg-service {
    background: rgb(14, 0, 255);
    background: linear-gradient(135deg, rgba(14, 0, 255, 1) 0%, rgba(141, 0, 150, 1) 50%, rgba(255, 0, 0, 1) 100%);
    padding: 0 120px 200px;

    .row {
        margin: 0 -1.5rem;

        .card {
            background: none;
            width: 400px;
            padding: 0;
            margin: -60px 20px 30px;
            border: none;
            transition: border-radius 0.3s, border 0.3s, box-shadow 0.3s;

            &:hover {
                border-radius: 50px;
                // border: 3px solid white;
                -webkit-box-shadow: 0 5px 25px 15px #FFFFFF;
                -moz-box-shadow: 0 5px 25px 15px #FFFFFF;
                -o-box-shadow: 0 5px 25px 15px #FFFFFF;
                box-shadow: 0 5px 25px 15px #FFFFFF;

                img {
                    border-radius: 50px;
                    transition: border-radius 0.3s, border 0.3s;
                }

                .card-img-overlay {
                    border-radius: 0 0 50px 50px;
                }
            }

            img {
                border-radius: 0 0 50px;
            }

            .card-img-overlay {
                background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
                position: absolute;
                bottom: 0;
                top: auto;
                color: white;
                padding: 30px;
                border-radius: 0 0 50px;

                .card-text {
                    color: yellow;
                }
            }
        }
    }

    .citation {
        text-align: center;
        padding-bottom: 70px;

        .text-citation {
            color: white;
            padding: 100px 150px 0;
        }

        .person-citation {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;

            .profile-citation {
                width: 70px;
                border-radius: 999px;
            }

            h3 {
                color: white;
                font-size: 22px;
            }

        }
    }
}
</style>