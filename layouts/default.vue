<template>
  <div class="t-flex" >
    <aside class="t-flex t-flex-col t-h-screen t-w-1/2 md:t-w-1/4 t-p-2 t-bg-custom-primary t-pr-4 t-transition t-duration-300'" :class="{ 't-translate-x-0': isAsideOpen, '-t-translate-x-[70%] sm:-t-translate-x-[80%] md:-t-translate-x-[70%] xl:-t-translate-x-[85%]': !isAsideOpen }">
      <header class="t-flex t-justify-between t-items-center">
        <div class="t-flex t-items-center t-p-2 hover:t-bg-gray-100 t-w-full t-rounded-lg">
          <img src="https://kitt-nn.ru/wp-content/uploads/2023/06/team-1.png" alt="avatar" class="t-rounded-full t-size-8 t-mr-2">
          <p v-if="isAsideOpen">name</p>
        </div>
        <Icon name="material-symbols:left-panel-close-outline" class="t-size-7 t-cursor-pointer hover:t-bg-gray-600" @click="isAsideOpen = !isAsideOpen"></Icon>
      </header>
      <div v-if="isAsideOpen">
        <NuxtLink :to="{ name: 'inbox' }">
          <div class="t-flex t-items-center t-justify-between t-p-2 hover:t-bg-gray-100 t-rounded-lg focus-within:t-bg-custom-light_danger">
            <div class="t-flex t-items-center">
              <Icon name="material-symbols:picture-in-picture-alt-outline" class="t-size-6  t-mr-2 hover:"></Icon>
              <h3 class="focus:t-bg-custom-light_danger">Входящие</h3>
            </div>
            <h3 class="focus:t-bg-custom-light_danger">{{ todos.length }}</h3>
          </div>
        </NuxtLink>
        <NuxtLink :to="{ name: 'today'}" class="focus-within:t-bg-custom-light_danger">
          <div class="t-flex t-items-center t-justify-between t-p-2 hover:t-bg-gray-100 t-rounded-lg focus-within:t-bg-custom-light_danger">
            <div class="t-flex t-items-center">
              <Icon name="material-symbols:dataset-outline-rounded" class="t-size-6  t-mr-2 hover:"></Icon>
              <h3 class="focus:t-bg-custom-light_danger">Сегодня</h3>
            </div>
            <h3 class="focus:t-bg-custom-light_danger"></h3>
          </div>
        </NuxtLink>
        <NuxtLink :to="{ name: 'upcoming'}">
          <div class="t-flex t-items-center t-p-2 hover:t-bg-gray-100 t-rounded-lg focus-within:t-bg-custom-light_danger">
            <Icon name="material-symbols:calendar-month-outline" class="t-size-6  t-mr-2 hover:"></Icon>
            <h3 class="focus:t-bg-custom-light_danger">Предстаящее</h3>
          </div>
        </NuxtLink>
      </div>
    </aside>
    <main class="t-mt-16 t-w-full">
      <slot>

      </slot>
    </main>
  </div>
</template>

<script setup lang="ts">
const isAsideOpen = ref(true);

</script>

<style scoped>

</style>