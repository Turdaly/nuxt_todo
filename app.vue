<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
<script setup lang="ts">
onMounted(() => {
  const todosInLocalStorage = localStorage.getItem("todos");
  if (todosInLocalStorage) {
    todos.value = JSON.parse(todosInLocalStorage);
  }
});
watch(
  () => todos.value,
  (state) => {
    localStorage.setItem("todos", JSON.stringify(state));
  },
  { deep: true }
);
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
