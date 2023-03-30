import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// Create ( Vuetify ) App
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// Get Icons With ( Vuetify ) And ( FontAwesome )
import { aliases, fa } from 'vuetify/lib/iconsets/fa-svg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons";
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
});
library.add(fas) // Include needed icons
library.add(fab) // Include needed icons

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(vuetify)
app.use(router)

app.mount('#app')


// app page
const dropsSmHeader = document.querySelectorAll('.header_small .gozl_ul .dropdown');
dropsSmHeader.forEach(drop => {
  drop.onclick = () => {
    drop.classList.toggle("active");
  }
})
