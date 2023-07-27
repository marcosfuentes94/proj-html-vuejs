<template>
    <div class="bg-footer">
        <div class="container">
            <div class="row">
                <div class="col footer-social">
                    <img class="logo" src="../img/logo.png" alt="">
                    <p class="info">
                        Ac aliquam neque sagittis diam faucibus vitae purus turpis phasellus. Pellentesque consectetur amet purus ultrices mauris.
                    </p>
                
                    <div class="row social">
                        <font-awesome-icon class="col-1 social-item" icon="fa-brands fa-facebook" />
                        <font-awesome-icon class="col-1 social-item" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="col-1 social-item" icon="fa-brands fa-youtube" />
                        <font-awesome-icon class="col-1 social-item" icon="fa-brands fa-instagram" />
                        <font-awesome-icon class="col-1 social-item" icon="fa-brands fa-linkedin" />

                    </div>
                </div>
            
                <div class="col footer-post">
                    <h3 class="post-title">RECENT POSTS</h3>
                    <ul class="recent-post">
                        <li>
                            > The best protein shake
                        </li>
                        <li>
                            > Ultimate cardio workout
                        </li>
                        <li>
                            > New juices available now
                        </li>
                        <li>
                            > Tips to find training partners
                        </li>
                        <li>
                            > 20 best healthy recipes
                        </li>
                    </ul>
                </div>
                
                <div class="col footer-contact">
                    <h3 class="contact-title">CONTACT INFORMATIONS</h3>
                    <p class="address">4746 Tipple Road Michigan 48449</p>
                    <p class="phone">Mobile : 1.800.000.0000</p>
                    <p class="mail">Email : info@your-company.com</p>
                    
                </div>
            </div>
        </div>
        <hr class="separator">
        <div class="container p-0 py-4">
            <p class="copyright">© Copyright 2012 - 2023 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>

        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
.bg-footer {
  background-color: black;
  
  .container {
    padding: 150px 0;
    text-align: center;
    
    .logo {
      padding-bottom: 15px;
    }
    
    .info {
      color: white;
      font-size: 18px;
    }
    
    .footer-social {
      .social {
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        
        .social-item {
            cursor: pointer;
          font-size: 30px;
          gap: 30px;
          color: rgb(244, 31, 31);
          transition: transform 0.3s, color 0.3s;
          
          &:hover {
            color: rgb(100, 100, 255);
            transform: scale(1.8);
          }
        }
      }
    }
    
    .footer-post {
      color: white;
      
      .post-title {
        padding-bottom: 20px;
        font-size: 24px;
      }
      
      .recent-post {
        list-style: none;
        font-size: 20px;
        line-height: 50px;
        
        li {
          &:hover {
            color: yellow;
          }
        }
      }
    }
    
    .footer-contact {
      color: white;
      
      .contact-title {
        padding-bottom: 20px;
        font-size: 24px;
      }
      
      .address {
        padding: 20px 0;
        color: gray;
        font-size: 18px;
      }
      
      .phone, .mail {
        font-size: 18px;
        line-height: 10px;
      }
    }
  }
}

.separator {
  color: gray;
  font-size: 7px;
}

.copyright{
    color: lightgray;
}

</style>