import { useState } from "react";
import "./App.css";
import Todo from "./componentes/Todo";
import TodoForms from "./componentes/TodoForms";
import Search from "./componentes/Search";
import Filter from "./componentes/Filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Estudar Programação",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Passear com o cachorro",
      category: "Pessoal",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("A a Z");

  const addTodo = (text, category) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )

          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "A a Z"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((item) => (
            <Todo
              key={item.id}
              todo={item}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForms addTodo={addTodo} />
    </div>
  );
}

export default App;
