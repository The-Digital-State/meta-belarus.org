<template>
  <app>
    <section class="bg-blue-900">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-white">
        <div class="flex mb-6 items-center space-x-4">
          <h1 class="text-3xl font-extrabold tracking-tight">{{$page.title}}</h1>
        </div>
      </div>
    </section>
    <section class="border-t">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20">
          <div class="col-span-2">
            <div class="space-y-5">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </section>
  </app>
</template>

<script>
import App from '../components/App'
export default {
  name: 'Layout',
  components: { App },
}
</script>

<style scoped>

</style>
