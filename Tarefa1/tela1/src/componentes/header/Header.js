import urlLogo from '../../imagens/logo.png';
import LiHeader from './LiHeader';
import './Header.css';

const Header = () => {
  return(
    <header className='header'>
      <div className='container'>
        <div>
          <img src={urlLogo} alt="" />
          <small>Melhores alunos do Vemser de todos os tempos</small>
        </div>
        <div>
          <nav>
            <ul>
              <LiHeader nav='Home' />
              <LiHeader nav='Sobre' />
              <LiHeader nav='Contato' />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;