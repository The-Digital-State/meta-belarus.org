import './index.css'
import { createI18n } from 'vue-i18n'
import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(
    ({ app, router }) => {
        const i18n = createI18n()
        app.use(i18n)
})

