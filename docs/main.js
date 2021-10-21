import { createApp } from 'vue'

import Docs from './Docs.vue'

const app = createApp(Docs)
app.config.unwrapInjectedRef = true
app.config.performance = true

app.mount('#app')
