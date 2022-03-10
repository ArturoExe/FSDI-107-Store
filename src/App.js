import './App.css';
import Catalog from './components/catalog';
import Footer from './components/footer';
import NavBar from './components/navBar';
function App() {


  return (

    <div className="App">
      <NavBar></NavBar>
      <h1>Hello world!</h1>
      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
