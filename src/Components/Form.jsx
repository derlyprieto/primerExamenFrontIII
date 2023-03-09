import { useState } from 'react'
import React from 'react'
import Card from './Card'

const Form = () => {
  
  const [user, setUser] = useState({
        generoMusical: "",
        cancion: "",
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.generoMusical.length >= 3 && user.cancion.length >= 6){
            setShow(true)
            setErr(false)
        } else setErr(true)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label>Ingresa tu genero musical favorito</label>
          <input type="text" value={user.generoMusical} onChange={(e) => setUser({...user, generoMusical: e.target.value})}/>
          <label>Ingresa tu canción favorita</label>
          <input type="text" value={user.cancion} onChange={(e) => setUser({...user, cancion: e.target.value})}/>
          <button>Enviar</button>
      </form>

      {
        show
        ?
        <>
        <Card generoMusical={user.generoMusical} cancion={user.cancion}/>
        </>
        :
        "Por favor chequea que la información sea correcta"
      }

    </div>
  )
}

export default Form




