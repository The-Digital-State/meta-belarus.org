import Layout from './Layout.vue'

export default {
    Layout,
    NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
    enhanceApp({ app, router, siteData }) {
        document.body.classList.add('h-full')
        document.body.classList.add('min-h-full')
        document.getElementById('app').classList.add('h-full')
        document.getElementById('app').classList.add('min-h-full')
        app.add()
        // app is the Vue 3 app instance from `createApp()`. router is VitePress'
        // custom router. `siteData`` is a `ref`` of current site-level metadata.
    }
}
