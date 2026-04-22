import { Container, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import TodoList from "./components/TodoList/TodoList";
import { FilterButtons } from "./components/FilterButtons/FilterButtons";
import TodoForm from "./components/TodoForm/TodoForm";
import { useTodos } from "./hooks/useTodos";
import { useState } from "react";
import { filterTodos } from "./utils/filterTodos";
import type { Filter } from "./utils/filterTodos";

function App() {
  //  ロジックは全部hookに任せる
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();

  // フィルターだけAppで管理
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTodos = filterTodos(todos, filter);


  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Todoアプリ
      </Typography>
      <Stack spacing={5} >
        <TodoForm addTodo={addTodo} />
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          clearCompleted={clearCompleted}
          filter={filter}
        />
      </Stack>
    </Container>

  );
}
export default App;