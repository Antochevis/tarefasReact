import urlLogo from '../../../imagens/logo.png';

const Cards = (props) => {
  return (
    <div className='cards'>
      <img src={urlLogo} alt="" />
      <span>{props.star}</span>
    </div>
  )
}

export default Cards