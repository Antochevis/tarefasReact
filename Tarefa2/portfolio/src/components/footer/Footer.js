import './Footer.css'


const Footer = ({usuario}) => {

  
  return (
    <div className='containerFooter'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className='footer'>
        <div className='direitosReservados'>
          <img src={usuario.avatar_url} alt="" />
          <span>© 2022 João Andrey</span>
        </div>
        <div>
          
        </div>
        <div className='socialMedias'>
          <a href="https://twitter.com/"><i class="fa-brands fa-twitter-square"></i></a>
          <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram-square"></i></a>
          <a href={usuario.blog}><i class="fa-brands fa-linkedin"></i></a>
          <a href={usuario.html_url}><i class="fa-brands fa-github-square"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;