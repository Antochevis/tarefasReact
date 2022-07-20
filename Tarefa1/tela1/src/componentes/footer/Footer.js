import LiFooter from './LiFooter'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='containerFooter'>
        <nav>
          <ul>
            <LiFooter nav='Home' />
            <LiFooter nav='Sobre' />
            <LiFooter nav='About' />
          </ul>
        </nav>
        <address class="address">AV. Andaraí 531 - Porto Alegre</address>
      </div>
    </footer>
  )
}

export default Footer;