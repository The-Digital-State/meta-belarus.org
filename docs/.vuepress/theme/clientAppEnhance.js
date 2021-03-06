import './index.css'
import { createI18n } from 'vue-i18n'
import { defineClientAppEnhance } from '@vuepress/client'
import en from "../../../locale/en-GB";
import ru from "../../../locale/ru-BY";
import by from "../../../locale/by-BY";

export default defineClientAppEnhance(
    ({ app, router , siteData}) => {
        const i18n = createI18n({
                messages: {
                    'en-US': en,
                    'ru-BY': ru,
                    'by-BY': by,
                },
                locale: siteData.value.lang
            }
        )
        app.use(i18n)

        console.log(siteData)



    })

