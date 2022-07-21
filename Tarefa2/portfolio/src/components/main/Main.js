import Repositorios from "./components/Repositorios";
import Seguidores from "./components/Seguidores";
import Seguindo from "./components/Seguindo";
import './Main.css'

function Main({usuario}) {

  return (
    <div className="containerMain">
      <div className="main">
        <div className="repositoriosMain">
          <Repositorios/>
        </div>
        <div className="seguidoresSeguindo">
          <div><Seguidores /></div>
          <div><Seguindo /></div>
        </div>
      </div>
    </div>
  )

}

export default Main;