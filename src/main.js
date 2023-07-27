import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass,faCartShopping, faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faMagnifyingGlass,faCartShopping,faYoutube,faArrowRight,faFacebook,faTwitter,faInstagram,faLinkedin,faPlay) 

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
