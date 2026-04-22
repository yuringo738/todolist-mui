export type Filter = "all" | "active" | "completed";

export type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

export const filterTodos = (todos: Todo[], filter: Filter) => {
    switch (filter) {
        case "active":
            return todos.filter((todo) => !todo.completed);

        case "completed":
            return todos.filter((todo) => todo.completed);

        default:
            return todos;
    }
};