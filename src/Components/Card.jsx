import React from 'react'

const Card = ({generoMusical, cancion}) => {

  return (
    <div className="card">
      <h3>Wow! Tu genero musical favorito es {generoMusical}</h3>
      <h3>Y la canción que no dejas de escuhar es {cancion}</h3>
    </div>
  )
}

export default Card