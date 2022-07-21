import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';


function App() {
  const [usuario, setUsuario] = useState([]);

  async function Setup() {
    try {
      let {data} = await axios.get('https://api.github.com/users/antochevis')
      setUsuario(data)
      return
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Setup()
  },[])

  return (
    <div>
      <Header usuario={usuario} />
      <Main/>
      <Footer usuario={usuario} />
    </div>
  );
}

export default App;
