import axios from "axios"
import {useEffect, useState} from 'react'
import './Repositorios.css'

function Repositorios() {
  const [val, setVal] = useState([]);

  const getRepos = async () => {

    try{
      let { data } = await axios('https://api.github.com/users/Antochevis/repos');
      setVal(data)
      return;
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="repositorios">
      <h2>Meus Repositórios</h2>
      <ul>
        {val.map(repository => {
          return (
            <li>
              <a href={repository.html_url}><h3>{repository.full_name}</h3></a>
            </li>
          )
        })}
      </ul>
    </div>
    
  )
}

export default Repositorios;