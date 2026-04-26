import { useEffect, useState } from "react";
import type { Todo } from "../utils/filterTodos";

const STORAGE_KEY = "todos";

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text: string) => {
        setTodos((prev) => [
            ...prev,
            { id: Date.now(), text, completed: false },
        ]);
    };

    const toggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos((prev) => prev.filter((todo) => !todo.completed));
    };

    return { todos, addTodo, toggleTodo, deleteTodo, clearCompleted };
};