import "./sections.scss"

const Links = () => {
  const items = ["Hvem?", "Hva?", "Hvor?"];

  return (
    <div className="links">{items.map(item=>(
      <a href={`#${item}`} key={item}>{item}</a>
    ))}</div>
  );
};

export default Links;
