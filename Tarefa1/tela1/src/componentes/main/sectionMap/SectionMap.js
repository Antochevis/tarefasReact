import './SectionMap.css'

const SectionMap = () => {
  return (
    <div className='containerMap'>
      <h3>Endereço da DBC</h3>
      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.408750306386!2d-51.20348518450577!3d-29.99641748189992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1655839170413!5m2!1spt-BR!2sbr" width="600" height="450"></iframe>
    </div>
  )
}

export default SectionMap;