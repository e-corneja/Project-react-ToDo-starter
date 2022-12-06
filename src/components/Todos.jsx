import todosData from "../data/todos.js";
import Todo from "./Todo.jsx";

const Todos = () => {
  return (
    <div className="todos">
      {todosData.map((todo) => {
        return (
          <Todo key={todo.id} text={todo.text} isFavorite={todo.isFavorite} />
        );
      })}
    </div>
  );
};

export default Todos;
