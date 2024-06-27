import "./hvem.scss";
import bilde from './a1.jpg';

console.log(bilde);

const Hvem = () => {
  return (
    <div className="card1">
        <h1>Adrian Emil Merli</h1>
        <h2>Lager nettsider og 3D-modeller...</h2>
        <p>fikser biler, spiller paintball, lager spill, spiller Fallout og mye mer</p>
        <img id="mig" src={bilde} height="150" width="100" />
    </div>
  )
};

export default Hvem;
