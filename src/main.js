import './assets/general.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMemoryHistory, createRouter } from 'vue-router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faLinkedinIn, faGithub, faEnvelope)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
