import axios from "axios"
import {useEffect, useState} from 'react'
import './Seguindo.css'

function Seguindo() {
  const [val, setVal] = useState([]);

  const getRepos = async () => {

    try{
      let { data } = await axios('https://api.github.com/users/Antochevis/following');
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
    <div className="seguindo">
      <h3>Quem eu sigo</h3>
      <ul className="listaSeguindo">
        {val.map(seguindo => {
          return (
            <li>
              <img src={seguindo.avatar_url} alt="" />
              <a href={seguindo.html_url}><h4>{seguindo.login}</h4></a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Seguindo;