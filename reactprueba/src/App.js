import "./App.css";
import Contenido from "./components/Contenido";
import Nav from "./components/Nav";
import "./components/Navbar.css";
import Side from "./components/Side";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="cont1">
              <Side></Side>
              <div className="cont12">
                <Nav></Nav>
                <Contenido></Contenido>
              </div>
            </div>
          }
        ></Route>

<Route path="/login" element={<div className="cont1">
    <Register></Register>
</div>}>       
</Route>
      </Routes>
    </div>
  );
}

export default App;
