import { Navbar, NavbarBrand } from "reactstrap";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar color="primary">
        <div className="container">
          <NavbarBrand href="/" color="light">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
