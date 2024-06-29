import './App.scss';
import Navbar from "./components/navbar";
import Hvem from "./components/hvem";
import Hva from "./components/hva";
import Hvor from "./components/hvor";

function App() {

  return (
    <>
    <div className='main-wrapper'>
        <Navbar />
        <section id="Hvem?">
          <Hvem />
        </section>
          <br/><br/><br/><br/><br/><br/><br/>
        <section id="Hva?">
          <Hva />
        </section>

        <section id="Hvor?">
          <Hvor />
        </section>
          <br/><br/><br/>
        <section id="Kontakt">
          <h1>Kontakt</h1>
        </section>
      </div>
    </>
  )
}

export default App
