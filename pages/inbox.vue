<template>
  <section class="t-flex t-ml-4 md:t-justify-center ">
    <div class="t-flex t-flex-col t-gap-4 t-w-3/5">
      <div class="">
        <h1 class="t-text-2xl t-font-bold t-mb-1">Сегодня</h1>
        <div v-if="todos.length" class="t-flex t-items-center t-gap-1">
          <Icon name="material-symbols:check-circle-outline"></Icon>
          <p class="t-text-sm">{{ todos.length}} задачи</p>
        </div>
      </div>
      <div v-for="(todo, index) in todos" :key="todo.id" class="t-border-b todo-item t-cursor-pointer">
        <div class="t-flex t-justify-between">
          <div class="t-flex t-w-full">
            <v-radio  :value="todo.title" density="compact" class="t--translate-x-1 t-mb-6" @click="deleteTodo(todo); playDeleteSound()"></v-radio>
            <p class="t-w-full" @click="toggleModal(); editTodo(index)">{{ todo.title }}</p>
          </div>
          <Icon name="material-symbols:edit-note-outline" class="t-size-7 t-cursor-pointer edit-icon"></Icon>
        </div>
        <p class="t-text-sm t-truncate ">{{ todo.description }}</p>
      </div>
      <div v-if="!isTodoOpen" class="t-flex t-gap-2 t-items-center t-mt-2">
        <Icon name="material-symbols:add" class="t-bg-custom-light_danger t-size-6"></Icon>
        <p class="t-text-sm hover:t-text-custom-light_danger t-cursor-pointer" @click="toggleTodo">Добавить задачу</p>
      </div>
      <div v-if="isTodoOpen" class="t-rounded-lg border t-p-2 ">
        <v-text-field v-model.trim="newTodo.title" :rules="[rules.required]" @keydown.enter="addTodo(); clearTodo()" clearable label="Название задачи" variant="underlined" class="t-text-sm"></v-text-field>
        <v-text-field v-model.trim="newTodo.description" @keydown.enter="addTodo(); clearTodo()" clearable label="Описание" variant="underlined"></v-text-field>
        <div class="t-flex t-flex-col md:t-flex-row t-gap-2">
          <v-btn class="" @click="toggleTodo(); clearTodo()">
            отмена
          </v-btn>
          <v-btn color="red-darken-1" :disabled="!newTodo.title" @click="addTodo(); clearTodo()">
            добавить задачу
          </v-btn>
        </div>
      </div>
    </div>

    <div v-if="isEditModalOpen" class="t-fixed t-inset-0 t-z-10 t-bg-black t-bg-opacity-50">
      <div class="t-bg-white t-max-w-3xl t-mx-auto t-my-8 t-rounded-xl">
        <div class="t-flex t-justify-between t-py-4 t-px-6 t-border-b">
          <NuxtLink :to="{ name: 'inbox'}" class="t-flex t-items-center t-gap-2" @click="closeEditModal">
            <Icon name="material-symbols:picture-in-picture-alt-outline"></Icon>
            <p>Входящие</p>
          </NuxtLink>
          <Icon name="material-symbols:close-rounded" class="t-size-6 t-cursor-pointer" @click="closeEditModal"></Icon>
        </div>
        <div class="t-px-4 t-py-6">
          <v-text-field label="Название задачи" variant="underlined" v-model.trim="testTodo.title"></v-text-field>
          <v-text-field label="Описание" variant="underlined" v-model.trim="testTodo.description"></v-text-field>
          <div class="t-flex t-justify-end t-gap-2">
            <v-btn color="grey-lighten-4" @click="closeEditModal">Отмена</v-btn>
            <v-btn color="red-darken-1" @click="saveTodo(); closeEditModal()">Сохранить</v-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">


const rules = {
  required: (v: any) => !!v || 'Заполните поле',
};

</script>

<style scoped>
.edit-icon {
  opacity: 0;

}

.todo-item:hover .edit-icon {
  opacity: 1;
}
</style>