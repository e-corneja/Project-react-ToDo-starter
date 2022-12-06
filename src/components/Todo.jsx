import iconDel from "../assets/icons/delete.png";

const Todo = ({ text, isFavorite }) => {
  return (
    <div className={`todo ${isFavorite && "todo__favorite"}`}>
      <div className="todo__wrapper">
        <div className="todo__star">★</div>
        <div className="todo__text">{text}</div>
      </div>
      <button className="todo__delete">
        <img src={iconDel} alt="icon" />
      </button>
    </div>
  );
};

export default Todo;
