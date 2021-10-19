<template>
  <app>
    <section class="bg-blue-900">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-white">
        <div class="flex mb-6 items-center space-x-4">
          <FingerPrintIcon class="w-10" />
          <h1 class="text-3xl font-extrabold tracking-tight">{{$page.title}}</h1>
        </div>
        <div class="hidden flex uppercase tracking-widest text-sm lg:flex-row flex-col font-semibold lg:space-x-5">
          <h5>1. Инкубация Идеи</h5>
          <div class="flex-grow text-center hidden lg:block">
            <ArrowNarrowRightIcon class="w-4 inline" />
          </div>
          <h5>2. Поиск Финансирования и Команды</h5>
          <div class="flex-grow text-center hidden lg:block">
            <ArrowNarrowRightIcon class="w-4 inline" />
          </div>
          <h5 class="text-green-300">3. Разработка</h5>
          <div class="flex-grow text-center hidden lg:block text-white text-opacity-30">
            <ArrowNarrowRightIcon class="w-4 inline" />
          </div>
          <h5 class="text-white text-opacity-30">4. Запуск и Интеграция</h5>
        </div>
      </div>
    </section>
    <section class="border-t">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
          <div class="col-span-2">
            <div class="grid grid-cols-1 gap-5 mb-7 md:grid-cols-2">
              <div class="bg-blue-50 p-5 rounded text-blue-900">
                <h3 class="font-bold mb-2">{{$t('who_uses')}}</h3>
                <p>{{$page.frontmatter.who}}</p>
              </div>
              <div class="bg-blue-50 p-5 rounded text-blue-900">
                <h3 class="font-bold mb-2">{{$t('how_works')}}</h3>
                <p>{{$page.frontmatter.how}}</p>
              </div>
            </div>
            <div class="space-y-5 prose">
              <Content />
            </div>
          </div>
          <aside>
            <h2 class="font-bold mb-5 text-2xl">{{ $t('how_help') }}</h2>
            <a v-if="$page.frontmatter.button_label" :href="$page.frontmatter.button_url" class="w-full block bg-blue-600 text-center mb-7 py-3 px-5 rounded text-white font-bold">{{$page.frontmatter.button_label}}</a>
            <div class="space-y-3 text-blue-900">
              <p>
              {{$page.frontmatter.help || $t('default_help')}}
              </p>
              <hr/>
              <ul v-if="$lang === 'ru-BY'">
                <li>- Расскажи о нас соседу!</li>
                <li>- Подпишись на нас в Телеграм!</li>
                <li>- Напиши нам и присоединись!</li>
              </ul>
              <ul v-if="$lang === 'en-US'">
                <li>- Raise public awareness!</li>
                <li>- Visit us in Телеграм!</li>
                <li>- Join our team!</li>
              </ul>
              <ul v-if="$lang === 'by-BY'">
                <li>- Распавядзі пра нас суседу!</li>
                <li>- Падпішыся на наш Тэлеграм!</li>
                <li>- Напішы нам і далучайся!</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </app>
</template>

<script>
  import App from '../components/App'

  import { FingerPrintIcon } from '@heroicons/vue/outline'
  import { ArrowNarrowRightIcon } from '@heroicons/vue/solid'

  export default {

    mounted () {
      this.$i18n.locale = this.$lang;
    },
    components: {
      App,
      ArrowNarrowRightIcon,
      FingerPrintIcon
    }

  }

</script>
