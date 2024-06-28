import './App.scss';
import Navbar from "./components/navbar";
import Hvem from "./components/hvem";
import Hva from "./components/hva";

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
          <br/><br/><br/>
        <section id="Hvor?">
          <h1>Footer</h1>
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
