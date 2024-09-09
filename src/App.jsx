import "./App.css";
import GenreMovieList from "./Componets/GenreMovieList";
import Header from "./Componets/Header";
import ProductionHouse from "./Componets/ProductionHouse";
import Slider from "./Componets/slider";

function App() {
  

  return (
    <div className="">
      
      <Header />
      
      <Slider />
      
      <ProductionHouse />

      <GenreMovieList />
    </div>
  );
}

export default App;
