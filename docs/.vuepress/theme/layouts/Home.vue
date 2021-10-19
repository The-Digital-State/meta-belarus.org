<template>
  <app>
    <section class="bg-black relative overflow-hidden">
      <picture class="absolute top-0 left-0 w-full h-full opacity-30 z-10">
        <img src="/belarus.jpg" class="object-cover w-full h-full" />
      </picture>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 z-20 relative">
        <div class="mb-6 text-white uppercase tracking-widest text-sm flex items-center">
          <i class="ri-shield-check-line text-2xl mr-3 text-blue-600"></i>Беларуское цифровое гражданское общество, основанное на доверии
        </div>
        <h1 class="lg:text-5xl text-white text-opacity-60 text-2xl leading-snug lg:leading-tight">
          <span class="block"><span class="font-semibold text-opacity-100 text-white">{{$t('title')}}</span><span class="font-light"> – {{$page.frontmatter.hero}}</span></span>
        </h1>
        <div class="mt-12 flex items-center lg:flex-shrink-0 md:space-x-4 flex-col md:flex-row md:space-y-0 space-y-2">
          <a :href="'/manifest-'+$lang.split('-')[0]+'.pdf'" class="inline-flex items-center justify-center px-5 py-3 border-2 border-blue-600 rounded font-bold text-white bg-blue-600 hover:bg-blue-700 hover:border-blue-700">
            <i class="ri-arrow-down-circle-line text-2xl mr-3 font-normal"></i>
            {{ $t('dl_manifest')}}
          </a>
          <a href="https://t.me/meta_belarus" class="rounded border-2 border-opacity-20 border-white inline-flex items-center justify-center px-5 py-3 text-white font-bold hover:bg-blue-700 hover:border-blue-700">
            <i class="ri-telegram-line text-2xl mr-3 font-normal"></i>
            {{ $t('telegram')}}
          </a>
          <router-link :to="$t('prefix')+'contact.html'" class="rounded border-2 border-white border-opacity-20 inline-flex items-center justify-center px-5 py-3 text-white font-bold hover:bg-blue-700 hover:border-blue-700">
            <i class="ri-message-2-line text-2xl mr-3 font-normal"></i>
            {{ $t('contact')}}
          </router-link>
        </div>
      </div>
    </section>
    <section class="logos bg-gray-50">
      <div class="py-16">
        <div class="uppercase tracking-widest text-xs text-blue-600 text-center mb-8 font-semibold">
          Our Partners
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 lg:grid-cols-4 gap-10 grid-cols-2 text-gray-400">
          <div class="text-center"><img src="@assets/nau_ru.svg" class="inline w-28"/></div>
          <div class="text-center"><img src="@assets/po.svg" class="inline w-28"/></div>
          <div class="text-center"><img src="@assets/aragon.svg" class="inline w-28"/></div>
          <div class="text-center"><img src="@assets/aragon.svg" class="inline w-28"/></div>
          <div class="text-center"><img src="@assets/aragon.svg" class="inline w-28"/></div>
          <div class="text-center"><img src="@assets/aragon.svg" class="inline w-28"/></div>
          <div class="text-center"><img src="@assets/aragon.svg" class="inline w-28"/></div>
          <div class="text-center"><img src="@assets/aragon.svg" class="inline w-28"/></div>
        </div>
      </div>
      <div class="py-16 border-t border-black border-opacity-5">
        <div class="uppercase tracking-widest text-xs text-blue-600 text-center mb-8 font-semibold">
          Follow us
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 lg:grid-cols-4 gap-10 grid-cols-2 text-gray-400">
          <div class="text-center hover:text-blue-600">
            <router-link class="flex items-center justify-center" to="/"><i class="ri-telegram-line text-3xl mr-3"></i><span>Telegram</span></router-link>
          </div>
          <div class="text-center hover:text-blue-600">
            <router-link class="flex items-center justify-center" to="/"><i class="ri-facebook-line text-3xl mr-3"></i><span>Facebook</span></router-link>
          </div>
          <div class="text-center hover:text-blue-600">
            <router-link class="flex items-center justify-center" to="/"><i class="ri-linkedin-line text-3xl mr-3"></i><span>LinkedIn</span></router-link>
          </div>
          <div class="text-center hover:text-blue-600">
            <router-link class="inline-flex items-center justify-center" to="/"><i class="ri-youtube-line text-3xl mr-3"></i><span >YouTube</span></router-link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="py-20">
        <h2 class="container mx-auto mb-4 text-3xl font-semibold">Our Projects</h2>
        <carousel :settings="settings" :breakpoints="breakpoints" class="relative">
          <slide v-for="slide in projects" :key="slide" class="py-10">
            <div class="grid grid-cols-2 gap-20 items-center container mx-auto">
              <picture class="bg-blue-600 h-80"></picture>
              <div class="flex items-center py-20">
                <!-- <component v-bind:is="slide.icon" class="w-44 mr-8 mt-1 text-blue-600"></component> -->
                <div class="flex-grow text-left">
                  <h3 v-if="$lang === 'en-US'" class="text-gray-600 text-5xl font-bold mb-6">{{ slide.name }}</h3>
                  <h3 v-if="$lang === 'ru-BY'" class="text-gray-600 text-5xl font-bold mb-6">{{ slide.name_ru }}</h3>
                  <h3 v-if="$lang === 'by-BY'" class="text-gray-600 text-5xl font-bold mb-6">{{ slide.name_by }}</h3>

                  <p v-if="$lang === 'en-US'" class="text-gray-400 mb-4 text-md">{{ slide.description }}</p>
                  <p v-if="$lang === 'ru-BY'" class="text-gray-400 mb-4 text-md">{{ slide.description_ru }}</p>
                  <p v-if="$lang === 'by-BY'" class="text-gray-400 mb-4 text-md">{{ slide.description_by }}</p>
                  <nav class="mt-8">
                    <a v-if="slide.url" :href="slide.url" class="text-sm font-semibold text-blue-600 flex hover:text-blue-900"><span>{{$t('view_project')}}</span><ArrowRightIcon class="inline w-3 ml-2"/></a>
                    <router-link v-else-if="($lang === 'ru-BY' && slide.link_ru)" :to="slide.link_ru" class="text-md font-semibold text-blue-600 flex hover:text-blue-900"><span>{{$t('view_project')}}</span><ArrowRightIcon class="inline w-3 ml-2"/></router-link>
                    <router-link v-else-if="($lang === 'by-BY' && slide.link_by)" :to="slide.link_by" class="text-md font-semibold text-blue-600 flex hover:text-blue-900"><span>{{$t('view_project')}}</span><ArrowRightIcon class="inline w-3 ml-2"/></router-link>
                    <router-link v-else :to="slide.link" class="text-md font-semibold text-blue-600 flex hover:text-blue-900"><span>{{$t('view_project')}}</span><ArrowRightIcon class="inline w-3 ml-2"/></router-link>
                  </nav>
                </div>
              </div>
            </div>
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </section>
    <section class="bg-blue-600 text-white">
      <div class="container py-20 mx-auto">
        <h2 class="mb-10 text-3xl font-semibold">Frequently asked questions</h2>
        <div class="">
          <div class="border-t-2 border-white border-opacity-10 py-5">
            <header class="text-xl flex items-center cursor-pointer">
              <i class="ri-arrow-right-s-line mr-2"></i>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </header>
            <div class="hidden">
              123
            </div>
          </div>
          <div class="border-t-2 border-white border-opacity-10 py-5">
            <header class="text-xl flex items-center cursor-pointer">
              <i class="ri-arrow-right-s-line mr-2"></i>
              <span>Donec urna lacus, posuere eu dignissim eget.</span>
            </header>
            <div class="hidden">
              123
            </div>
          </div>
        </div>
      </div>
    </section>
  </app>
</template>

<script>
  import App from '../components/App'

  // Icons
  // import {
  //   AcademicCapIcon,
  //   ArrowCircleDownIcon,
  //   BeakerIcon,
  //   CurrencyEuroIcon,
  //   FlagIcon,
  //   LibraryIcon, ShieldCheckIcon, SpeakerphoneIcon, ChatAlt2Icon, PlusCircleIcon
  // } from '@heroicons/vue/outline'
  // import { ArrowRightIcon } from '@heroicons/vue/solid'
  // import { FingerPrintIcon } from '@heroicons/vue/outline'

  // Carousel
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  export default {
    components: {
      App,
      // ArrowCircleDownIcon,
      // BeakerIcon,
      // ArrowRightIcon,
      // FingerPrintIcon,
      Carousel,
      Slide,
      Pagination,
      Navigation,
      // ShieldCheckIcon,
      // ChatAlt2Icon,
      // PlusCircleIcon
    },
    mounted () {
      this.$i18n.locale = this.$lang;
    },
    data() {
      return {
        settings: {
          itemsToShow: 1,
          // snapAlign: 'center',
        },
        projects: [
          {
            name: 'Albo',
            name_ru: 'Альбо',
            name_by: 'Альбо',
            description: 'Digital voting system designed to fight tampering and forgery. Implements secret ballots, transparent vote counting and audit',
            description_ru: 'Система по электронному голосованию. Реализует тайну голосования, подсчет голосов и возможность аудита',
            description_by: 'Сістэма лічбавага галасавання. Рэалізуе тайну галасавання, падлік галасоў і магчымасць аўдыту',
            // icon: ShieldCheckIcon,
            link: '/project/albo.html',
            link_ru: '/ru/project/albo.html',
            link_by: '/by/project/albo.html'
          },
          {
            name: 'Meta-ID',
            name_ru: 'МэтаID',
            name_by: 'МэтаID',
            description: 'Belarus integration into EU eIDAS (SSI) network. Decentralised implementation using Blockchain technology.',
            description_ru: 'Интеграция Беларуси в EU eIDAS (SSI) сеть. Децентрализированное применение технологии блокчейн.',
            description_by: 'Інтэграцыя Беларусі ў EU eIDAS (SSI) сетку. Дэцэнтралізаванае прымяненне тэхналогіі блокчэйн.',
            // icon: FingerPrintIcon,
            link_ru: '/ru/project/meta-id.html',
            link_by: '/by/project/meta-id.html',
            link: '/project/meta-id.html'
          },
          {
            name: 'Nation of Leaders',
            name_ru: 'Нация Лидеров',
            name_by: 'Нацыя Лидераў',
            description: 'Educating citizens of Belarus. Offering courses on civil rights, anti-propaganda, community leadership, cyber security and more',
            description_ru: 'Образование граждан Беларуси. Доступны курсы по правам человека, анти-пропаганды, лидерству и кибер-безопасности',
            description_by: 'Адукацыя грамадзян Беларусі. Ужо зараз курсы па правах чалавека, супраць-прапаганды, па лідарству і кібер-бяспецы',
            // icon: AcademicCapIcon,
            url: 'https://nationofleaders.org/' // TODO - not working
          },
          {
            name: 'Budget Governance',
            name_ru: 'Бюджетный контроль',
            name_by: 'Кантроль Бюджэту',
            description: 'Government-independent and secure budget and grant control implemented through the blockchain technology and flat crypto currency',
            description_ru: 'Система по контролю бюджетов основанной на блокчейне, что не позволяет никому злоупотреблять вашими средствами',
            description_by: 'Сістэма па кантролю бюджэтаў, заснаваная на блакчэйне, што не дазваляе нікому злоўжываць вашымі сродкамі',
            // icon: CurrencyEuroIcon,
            link: '/project/budget-governance.html',
            link_ru: '/ru/project/budget-governance.html',
            link_by: '/by/project/budget-governance.html'
          },
          {
            name: 'The Digital State',
            name_ru: 'Мэта государство',
            name_by: 'Мэта дзяржава',
            description: 'Blockchain-based self-governance system incorporating identity, election, power transfer, tax and budget control for decentralised parliament',
            description_ru: 'Децентрализованная парламентская система самоуправления на блокчейне: идентификация, выборы, передача власти, налог и бюджет',
            description_by: 'Дэцэнтралізаваная парламентская сыстэма самакіравання на блокчэйне: ідэнтыфікацыя, выбары, перадача ўлады, налог і бюджэт',
            // icon: LibraryIcon,
            link: '/project/the-digital-state.html',
            link_ru: '/ru/project/the-digital-state.html',
            link_by: '/by/project/the-digital-state.html'
          }
        ]
      }
    }
  }
</script>
<style>
  .carousel__prev, .carousel__next {
    @apply bg-white;
    @apply text-blue-600;
  }
  .carousel__icon {
    @apply w-24;
    @apply h-24;
  }
  .carousel__prev {
    @apply ml-8;
  }
  .carousel__next {
    @apply mr-8;
  }
  .carousel__viewport {
    @apply mb-6;
  }
  .carousel__pagination {
    font-size: 0;
    @apply absolute;
    @apply inset-x-0;
    @apply top-full;
    @apply mt-3;
  }
  .carousel__pagination-button {
    /* @apply h-1; */
    @apply my-1;
    @apply bg-blue-200;
  }
  .carousel__pagination-button.carousel__pagination-button--active {
    @apply bg-blue-600;
  }
</style>
