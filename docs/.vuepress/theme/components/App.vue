<template>
  <div class="flex flex-col h-full min-h-full">
    <header class="bg-white flex-grow-0">
      <div
          class="flex items-center max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-8 lg:px-8 md:flex-row flex-col space-y-5 md:space-y-0">
        <div class="flex-grow">
          <router-link to="/">
            <img src="@assets/logo-2.png" class="lg:w-48 md:w-40 w-32" />
          </router-link>
        </div>
        <nav
            class="text-xs md:space-x-10 flex md:flex-row flex-col text-center md:text-left md:items-center space-y-5 md:space-y-0">
          <div class="space-y-2 flex flex-col md:flex-row md:space-y-0 md:space-x-7">
            <router-link v-for="item in nav" :to="item.link"
                         class="text-blue-600 uppercase tracking-widest font-semibold hover:text-blue-900">{{
                item.name
              }}
            </router-link>
          </div>
          <router-link to="/project"
                       class="inline-block w-32 text-center px-4 py-3 font-bold rounded text-white text-center bg-blue-600 hover:bg-blue-700">
            Button
          </router-link>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <slot/>
    </main>
    <footer class="bg-gray-50 flex-grow-0">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-8 lg:px-8 text-xs text-gray-400 flex">
        <div class="flex-grow">
          {{ $t('copy') }}
        </div>
        <nav class="space-x-5">
          <router-link to="/" class="hover:text-gray-500">Privacy Policy</router-link>
          <router-link to="/" class="hover:text-gray-500">Terms & Conditions</router-link>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>

import ru from '../../../../locale/ru-BY'
import en from '../../../../locale/en-GB'

export default {
  name: 'App',
  data () {
    return {
      nav: [
        {
          name: 'Link Name 1',
          link: '/project'
        },
        {
          name: 'Link Name 2',
          link: '/project'
        },
        {
          name: 'Link Name 3',
          link: '/project'
        }
      ]
    }
  },
  mounted () {
    this.$i18n.locale = this.$lang;
    console.log(this.$lang);
    ['html', 'body', '#app'].forEach(el => {
      document.querySelector(el).classList.add('h-full', 'min-h-full')
    })
  },
  i18n: {
    messages: {
      'en-US': en,
      'ru-BY': ru,
    }
  }

}
</script>

<style scoped>

</style>
