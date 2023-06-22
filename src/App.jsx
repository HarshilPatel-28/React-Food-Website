import './App.css';
import { useGlobalContext } from "./context";


import Favorites from './components/Favorites';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Search from './components/Search';
import Footer from './components/Footer';
function App() {

  const {showModal,favourites} = useGlobalContext();
  return (
    <main>
     <Search/>
     {favourites.length > 0 &&  <Favorites /> } 
     <Meals/>
     {showModal && <Modal/>}
     <Footer></Footer>
    </main>
  );
}

export default App;
