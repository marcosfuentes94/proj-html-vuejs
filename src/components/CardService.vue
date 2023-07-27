<template>
    <div class="bg-service">
        <div class="container">
            <div class="row gap-5">
                <div class="col card-service">
                    <div class="card-header">
                        <img src="https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-smartwatch-icon-png-image_2058326.jpg"
                            alt="">
                        <h3 class="title">Team training</h3>
                        <h4 class="subtitle">Find a partner</h4>
                    </div>

                    <div class="card-info">
                        <p class="info">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, debitis totam. Cum in
                            exercitationem ipsam quibusdam reprehenderit odio nobis vel?
                        </p>
                        <a class="link" href="">Find a partner ></a>
                    </div>
                </div>

                <div class="col card-service">
                    <div class="card-header">
                        <img src="https://thumbs.dreamstime.com/b/dumbbell-weights-symbol-exercise-icon-black-isolated-white-background-eps-vector-dumbbell-weights-symbol-exercise-icon-181421118.jpg"
                            alt="">
                        <h3 class="title">Crossfit workout</h3>
                        <h4 class="subtitle">Push your limits</h4>
                    </div>

                    <div class="card-info">
                        <p class="info">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, debitis totam. Cum in
                            exercitationem ipsam quibusdam reprehenderit odio nobis vel?
                        </p>
                        <a class="link" href="">Learn about Crossfit ></a>
                    </div>
                </div>

                <div class="col card-service">
                    <div class="card-header">
                        <img src="https://www.shutterstock.com/image-vector/women-waist-icon-260nw-780495346.jpg" alt="">
                        <h3 class="title">Weight loss plan</h3>
                        <h4 class="subtitle">Shed those pounds</h4>
                    </div>

                    <div class="card-info">
                        <p class="info">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, debitis totam. Cum in
                            exercitationem ipsam quibusdam reprehenderit odio nobis vel?
                        </p>
                        <a class="link" href="">Schedule a workout ></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.bg-service {
  background-color: black;
  min-height: 800px;

  .container {
    padding: 120px 0 120px;

    .card-service {
      border: 5px solid rgb(32, 15, 159);
      border-radius: 10px;
      text-align: center;
      padding: 50px;
      transition: border-radius 0.3s, transform 0.3s;

      &:hover {
        border: 5px solid rgb(117, 0, 172);
        border-radius: 40px;
        transform: scale(1.1);
        overflow: visible;

        .card-header {
          img {
            transition: transform 0.3s ease-out;
            transform: scale(1.7);
          }
          .title {
            color: red;
            transition: color 0.3s ease-out;
          }
        }

        .card-info {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.3s, transform 0.3s;
        }
        
        .link {
          color: yellow;
          transition: color 0.3s ease-out;
        }
      }

      .card-header img {
        width: 100px;
        filter: invert(1);
        transition: transform 0.3s ease-out;
      }

      .card-header {
        .title {
          padding-top: 30px;
          font-size: 32px;
          color: white;
        }

        .subtitle {
          font-size: 26px;
          color: #d9ff00;
          padding-bottom: 30px;
        }
      }

      .card-info {
        color: white;
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.3s, transform 0.3s;

        .link {
          font-size: 18px;
          text-decoration: none;
          color: currentColor;
          font-weight: bold;
        }
      }

      &:hover,
      &:focus-within {
        height: 500px;
        transition: height 0.3s;
      }

      &:not(:hover) {
        height: 300px;
        transition: height 0.3s;
      }
    }
  }
}
</style>