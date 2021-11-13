import { createApp } from 'vue'

import Docs from './Docs.vue'
import router from './router'

const app = createApp(Docs)
app.use(router)
app.config.unwrapInjectedRef = true
app.config.performance = true

app.mount('#app')
