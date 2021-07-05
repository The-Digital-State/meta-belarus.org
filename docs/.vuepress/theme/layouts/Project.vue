<template>
  <app>
    <section class="bg-blue-900">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-white">
        <div class="flex mb-6 items-center space-x-4">
          <FingerPrintIcon class="w-10" />
          <h1 class="text-3xl font-extrabold tracking-tight">Meta-ID</h1>
        </div>
        <div class="flex uppercase tracking-widest text-sm lg:flex-row flex-col font-semibold lg:space-x-5">
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
                <h3 class="font-bold mb-2">Кто этим пользуеться?</h3>
                <p>Curabitur egestas nisl eu dui euismod elementum.</p>
              </div>
              <div class="bg-blue-50 p-5 rounded text-blue-900">
                <h3 class="font-bold mb-2">Как это помогает главной миссии meta-belarus?</h3>
                <p>Curabitur egestas nisl eu dui euismod elementum.</p>
              </div>
            </div>
            <div class="space-y-5">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum dolor ex, sed venenatis mi mollis ac. Nullam consectetur vitae nisl sed pretium. Sed mattis pharetra est, id ornare augue auctor nec. Suspendisse ut odio nisl. Fusce at nulla nisi. Vivamus justo tellus, varius vitae sapien vel, mattis tincidunt libero. Nulla dictum lobortis ligula a vestibulum.</p>
              <p>Quisque vitae elit nunc. Nunc rhoncus efficitur massa, ut vestibulum ligula efficitur in. Nulla eleifend urna tellus, sed scelerisque odio ultricies eu. Quisque vel vulputate urna. Nunc hendrerit congue hendrerit. Nam non rhoncus lectus. Praesent ullamcorper odio diam, ac placerat ipsum cursus a. Donec tincidunt efficitur dictum. Nulla sit amet neque neque. Pellentesque sit amet erat elit. Maecenas pretium ornare sapien, vel imperdiet odio venenatis ut. Maecenas vel blandit nulla, et venenatis nibh. Integer eu nisi mauris.</p>
              <p>Pellentesque ut velit lorem. Maecenas efficitur hendrerit iaculis. Donec scelerisque id eros eu ultrices. Donec eu risus finibus, tempus ligula id, volutpat nulla. Pellentesque egestas, est nec malesuada vehicula, nibh ex mattis magna, sit amet tristique dui metus eget velit. Nulla vulputate vestibulum fermentum. Vivamus semper augue at enim auctor tristique. Curabitur egestas nisl eu dui euismod elementum.</p>
            </div>
          </div>
          <aside>
            <h2 class="font-bold mb-5 text-2xl">Как помочь инициативе?</h2>
            <router-link to="/" class="w-full block bg-blue-600 text-center mb-7 py-3 px-5 rounded text-white font-bold">Button</router-link>
            <div class="space-y-3 text-blue-900">
              <p>Curabitur egestas nisl eu dui euismod elementum.</p>
              <p>Quisque vitae elit nunc. Nunc rhoncus efficitur massa, ut vestibulum ligula efficitur in.</p>
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

    components: {
      App,
      ArrowNarrowRightIcon,
      FingerPrintIcon
    }

  }

</script>
