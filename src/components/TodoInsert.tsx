import React, { useState } from "react";
import useAddTodo from "../hooks/useAddTodo";

const TodoInsert = () => {
  const [value, setValue] = useState("");
  const addTodo = useAddTodo();

  const handleAddTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={handleAddTodo}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoInsert;
