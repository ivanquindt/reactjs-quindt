import { Navbar } from "./Navbar";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
 node app.js 
function App() {
  return <h1>HOla</h1>;
}
const App = () => {
  const [buttonText, setButtonText] = useState("Haz Clic Aqui");

  return (
    <div>
      <button onClick={() => setButtonText("Gracias por hacer clic!")}></button>
    </div>
  );
};
export default App;
