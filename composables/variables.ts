export interface ITodo {
  id: number;
  title: string;
  description?: string;
  date: string;
}
export const todos = ref<ITodo[]>([]);
export const newTodo = ref<ITodo>({
  id: Date.now(),
  title: "",
  description: "",
  date: "",
});

export const testTodo = ref<ITodo>({
  id: Date.now(),
  title: "",
  description: "",
  date: "",
});
export const isTodoOpen = ref<boolean>(false);
export const isEditModalOpen = ref<boolean>(false);
export const model = shallowRef("Egg plant");
export const indexTodo = ref<number>(0);
