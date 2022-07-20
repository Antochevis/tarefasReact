import './Form.css'

const Form = () => {
  return (
    <div className="containerForm">
      <h2>Contato</h2>
      <div className='form'>
        <label>Digite seu nome completo:</label>
        <input type="text" required placeholder='digite o nome completo'/>
        <label>Digite seu e-mail:</label>
        <input type="text" required placeholder='digite o e-mail'/>
        <label >Qual o motivo do contato</label>
        <select>
        <option value="r1">Problema no site</option>
        <option value="r2">React é easy demais</option>
        </select>
        <label>Digite sua mensagem:</label>
        <textarea rows={10} placeholder='Digite sua Mensagem' required />
        <button className='button'>salvar</button>
      </div>
    </div>
  )
}

export default Form;