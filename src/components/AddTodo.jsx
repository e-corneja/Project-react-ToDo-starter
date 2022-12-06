import React from "react";

const AddTodo = () => {
  return (
    <div className="add-todo">
      <input
        type="text"
        className="add-todo__input"
        placeholder="Фуфелшмерц, тебя ждут дела"
      />
      <button type="submit" className="add-todo__btn">
        Добавить
      </button>
    </div>
  );
};

export default AddTodo;
