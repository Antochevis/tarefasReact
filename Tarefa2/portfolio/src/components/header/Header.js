import './Header.css';

function Header({usuario}) {

  return (
    <div className='container'>
      <div className='header'>
        <a href={usuario.blog}><img src={usuario.avatar_url} alt="Imagem de perfil" className='profileImage' /></a>
        <div className='infosNome'>
          <a href={usuario.html_url}><h1>Username: {usuario.login}</h1></a>
          <h2>{usuario.name}</h2>
          <h3>{usuario.bio} na {usuario.company}</h3>
        </div>
      </div>
    </div>
  )

}

export default Header;