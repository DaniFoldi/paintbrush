# How To Install Paintbrush
```
npm install paintbrush-ui
```

And in your app.vue:
```
<Paintbrush [...]>\n  <div>My awesome site</div>\n</Paintbrush>
```

Here is an example `nuxt.config.ts`:


```typescript
import { defineNuxtConfig } from 'nuxt'


export default defineNuxtConfig({
  alias: {
    '#fonts': './node_modules/paintbrush-ui',
    '#paintbrush': './node_modules/paintbrush-ui'
  },
  components: {
    global: true
  },
  content: {
    highlight: false,
    markdown: {
      tags: {
        /* eslint-disable sort-keys */
        'p': 'content-text-p',
        'a': 'autolink',
        'blockquote': 'highlight',
        'code-inline': 'inline-code',
        'code': 'multiline-code',
        'em': 'content-text-em',
        'h1': 'content-text-h1',
        'h2': 'content-text-h2',
        'h3': 'content-text-h3',
        'h4': 'content-text-h4',
        'h5': 'content-text-h5',
        'h6': 'content-text-h6',
        'hr': 'separator',
        'img': 'image',
        'ul': 'content-list-container-ul',
        'ol': 'content-list-container-ol',
        'li': 'content-list-item-li',
        'strong': 'content-text-strong',
        'table': 'prose-table',
        'thead': 'prose-thead',
        'tbody': 'prose-tbody',
        'td': 'prose-td',
        'th': 'prose-th',
        'tr': 'prose-tr'
        /* eslint-enable sort-keys */
      }
    }
  },
  modules: [ '@vueuse/nuxt', 'nuxt-lodash', 'paintbrush-ui', '@pinia/nuxt', '@nuxt/content' ],
  paintbrush: {
    prefixComponents: false
  },
  ssr: false,
  typescript: {
    shim: false
  },
  vite: {
    define: {
      __VUE_PROD_DEVTOOLS__: false
    }
  }
})
```