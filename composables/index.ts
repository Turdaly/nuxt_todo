export const toggleTodo = () => {
  isTodoOpen.value = !isTodoOpen.value;
};

export const addTodo = () => {
  if(newTodo.value.title){
    newTodo.value.id = Date.now();
    todos.value.push(newTodo.value);
  }
};

export const clearTodo = () => {
  newTodo.value = {
    id: 0,
    title: "",
    description: "",
    date: "",
  };
};

export const deleteTodo = (todo: ITodo) => {
  setTimeout(() => {
    todos.value = todos.value.filter((item) => item.id !== todo.id);

  }, 300)
};

export const toggleModal = () => {
  isEditModalOpen.value = !isEditModalOpen.value;
};

export const closeEditModal = () => {
  isEditModalOpen.value = false;
};

export const editTodo = (index: number) => {
  console.log(todos.value[index]);
  testTodo.value.id = todos.value[index].id;
  testTodo.value.title = todos.value[index].title;
  testTodo.value.description = todos.value[index].description;
};

export const saveTodo = () => {
  todos.value = todos.value.map((todo) => {
    if (todo.id === testTodo.value.id) {
      todo.title = testTodo.value.title;
      todo.description = testTodo.value.description;
    }
    return todo;
  });
};

export const playDeleteSound = () => {
  const audio = new Audio("deleteSound.mp3");
  audio.play();
};
