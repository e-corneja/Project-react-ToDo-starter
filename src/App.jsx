import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
