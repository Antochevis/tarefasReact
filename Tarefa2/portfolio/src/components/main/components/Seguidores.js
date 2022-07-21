import axios from "axios"
import {useEffect, useState} from 'react'
import './Seguidores.css'

function Seguidores() {
  const [val, setVal] = useState([]);

  const getRepos = async () => {

    try{
      let { data } = await axios('https://api.github.com/users/Antochevis/followers');
      setVal(data)
      return;
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="seguidores">
      <h3>Meus Seguidores</h3>
      <ul className="listaSeguidores">
        {val.map(seguidor => {
          return (
            <li>
              <a href={seguidor.html_url}><img src={seguidor.avatar_url} alt="" />
              <h4>{seguidor.login}</h4></a>
            </li>
          )
        })}
      </ul>
    </div>
    
  )
}

export default Seguidores;