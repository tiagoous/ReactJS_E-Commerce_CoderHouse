import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      {/* {NavBar} */}
      <NavBar />

      {/* {ItemListContainer} */}
      <ItemListContainer greeting="Bienvenido a nuestra tienda Online!" />
    </div>
  );
};

export default App
