import { createApp } from 'vue'

import Setup from './Setup.vue'

const app = createApp(Setup)
app.config.unwrapInjectedRef = true
app.config.performance = true

app.mount('#app')
