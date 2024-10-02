import "./App.css";
import Contenido from "./components/Contenido";
import Nav from "./components/Nav";
import "./components/Navbar.css";
import Side from "./components/Side";
function App() {
  return (
    <div className="App">
      <div className="cont1">
        <Side></Side>
        <div className="cont12">
          <Nav></Nav>
          <Contenido></Contenido>
        </div>
      </div>
    </div>
  );
}

export default App;
