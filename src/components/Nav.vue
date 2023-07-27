<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../img/logo.png" alt="">
            </a>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav d-flex align-items-center text-capitalize">

                    <li v-for="link in links" class="nav-item dropdown">
                        <a v-if="link.menu === ''" 
                        class="nav-link" 
                        aria-current="page" 
                        href="#"
                        >
                            {{ link.page }}
                        </a>

                        <a v-else-if="link.menu !== ''" 
                            class="nav-link dropdown-toggle" 
                            href="#" 
                            role="button" 
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            {{ link.page }}
                        </a>

                        <ul class="dropdown-menu">
                            <li  v-for="option in link.menu">
                                <a class="dropdown-item" href="#">{{ option }}</a>
                            </li>
                        </ul>
                    </li>


                    <button type="button" class="btn btn-primary mx-3 px-3 rounded-pill">Schedule a workout</button>


                    <li class="nav-item text-white">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </li>
                    <li class="nav-item text-white px-3">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: {
                home: {
                    page: 'home',
                    menu: '',
                },
                service: {
                    page: 'service',
                    menu: [
                        'All Service',
                        'Service Single Page'
                    ]
                },
                about: {
                    page: 'about',
                    menu: [
                        'About Me',
                        'Our Sponsor',
                        'contact'
                    ]
                },
                video: {
                    page: 'video',
                    menu: [
                        'All Playlist',
                        'Playlist Page',
                        'Video Single Page'
                    ]
                },
                blog: {
                    page: 'blog',
                    menu: '',
                },
                store: {
                    page: 'store',
                    menu: [
                        'Simple product',
                        'variable product'
                    ]
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    background-color: black;
    height: 100px;
    padding: 0 18px;

    .nav-item>a {
        color: white;
        font-size: 18px;
        padding: 0 20px;
    }
    .nav-item :hover{
        color: violet;
    }
    .dropdown-menu{
        background-color: rgba($color: #000000, $alpha: 0.6);
        .dropdown-item{
            color: white;
            &:hover{
                color: violet;
            }
        }
    }

    button:hover{
        background-color: red;
        border-color: red;
    }
}
</style>