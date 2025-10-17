import "./App.css";
import DynamicGreeting from "./components/DynamicGreeting";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div>
      <Header />
      <DynamicGreeting />
      <ToDoList />
      <Footer />
    </div>
  );
}

export default App;
