import Cards from "./Cards";
import './SectionCards.css'

const SectionCards = () => {
  return (
    <div className="containerCards">
      <h2>Estamos aprendendo react com o melhor professor de todos</h2>
      <div>
        <Cards star='Estrela 1' />
        <Cards star='Estrela 2' />
        <Cards star='Estrela 3' />
      </div>
    </div>
  )
}

export default SectionCards;