import './App.scss';
import Navbar from "./components/navbar";
import Hvem from "./components/hvem";

function App() {

  return (
    <>
      <Navbar />
      <section id="Hvem?">
        <Hvem />
      </section>

      <section id="Hva?">
        <h1>Content</h1>
      </section>

      <section id="Hvor?">
        <h1>Footer</h1>
      </section>
    </>
  )
}

export default App
