import React from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <Counter />
      <TodoInsert />
      <TodoList />
    </>
  );
}

export default App;
