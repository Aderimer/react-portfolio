import './App.scss';
import Navbar from "./components/navbar";
import Hvem from "./components/hvem";
import Hva from "./components/hva";
import Hvor from "./components/hvor";
import { Kontakt } from './components/kontakt';

function App() {

  return (
    <>
    <div className='main-wrapper'>
        <Navbar />
        <section id="Hvem?">
          <Hvem />
        </section>
        <section id="Hva?">
          <Hva />
        </section>

        <section id="Hvor?">
          <Hvor />
        </section>
        <section id="Kontakt">
          <Kontakt />
        </section>
      </div>
    </>
  )
}

export default App
