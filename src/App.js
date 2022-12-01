import "./App.css";
import NavBar from "./components/Navbar/NavBar"; 
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemList saludo={"Welcome to our shop!"}/>
      </div>
  );
}

export default App;
