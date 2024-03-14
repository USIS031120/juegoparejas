

import imagen1 from './img/marketing-digital.jpg'
import imagen2 from './img/mapa.jpg'
import imagen3 from './img/laptop.jpg'
import imagen4 from './img/marketing.jpg'

import imagen11 from './img/marketing.png'
import imagen21 from './img/mapa.png'
import imagen31 from './img/laptop.png'
import imagen41 from './img/marketing2.png'


import { useEffect, useState } from 'react'
import { useImagenes } from './components/useImagenes'



let actualImage = "";
let prevImage = "";
let active = false;

let actualImageSrc = "";
let prevImageSrc = "";

const sortImages = (array) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// let sortedImagenes = sortImages(sortImagenes)

// let sortedImagenesImagen = sortImages(sortImagenesImagen)
// let sortedImagenesMatch = sortImages(sortImagenesMatch)


let verificarImagenes = () => {
  const images = document.querySelectorAll(".card img");
  // console.log(images)
  let contadorImagenes = 0;
  images.forEach(imagen => {
    if (imagen.classList.contains("active")) {
      // console.log("no activo")
      contadorImagenes++
    }
    if ( images.length == contadorImagenes ) {
      // alert("Has terminado el juego")
      let popup = document.querySelector(".overlay")
      popup.classList.add("active")
    }
  })
}
export const App = () => {

  // const [ imagenes, setImagenes ] = useState([ imagen1, imagen2, imagen3, imagen4 ]);
  // const [ matchImagenes, setMatchImagenes ] = useState([ imagen11, imagen21, imagen31, imagen41 ]);

  // const [ sortImagenes, setSortImagenes ] = useState([ imagenes, matchImagenes ])

  const { imagenes, matchImagenes } = useImagenes()

  const [sortedImagenes, setSortedImagenes] = useState([])
  const [sortedImagenesMatch, setSortedImagenesMatch] = useState([])


  useEffect( () => {
    setSortedImagenes(sortImages(imagenes))
    setSortedImagenesMatch(sortImages(matchImagenes))

    console.log( sortedImagenes, sortedImagenesMatch )
  }, [] )


  const handleClick = (event, imagen) => {
    if (active || event.target.classList.contains("active")) return

    if ( prevImage == "" ) {
      prevImage = imagen;
      prevImageSrc = event.target
      event.target.classList.add("active")
      // console.log(actualImage);

    } else {
      actualImage = imagen
      actualImageSrc = event.target
      event.target.classList.add("active")
      active = true;
      if ( prevImage == actualImage ) {
        // alert("match")
        active = false;
        prevImage = "";
        prevImageSrc.classList.add("active1")
        actualImageSrc.classList.add("active1")
        verificarImagenes()
      } else {
        setTimeout(() => {
          active = false;
          prevImageSrc.classList.remove("active")
          actualImageSrc.classList.remove("active")

          prevImageSrc = "";
          actualImageSrc = "";
          prevImage = "";
        }, 1000);
      }
    }
  }



  return (
    <>
    <div className="overlay">
      <div className="popup">
        <h1>Ganaste!</h1>
        <a href="" className='btn'>Volver a jugar</a>
      </div>
    </div>
    <div>
    <h1 className="titulo">Parejas</h1>
    {/* <img src={imagen1} alt="" /> */}
    <div className="cards">
      <div className="left-cards">
      { sortedImagenes.map( (imagen, index) => {
        return <div key={index} className="card">
            <img onClick={(event) => {handleClick(event, imagen.nombre)}} src={ imagen.src } alt="" />
          </div>
      } ) }
      </div>
      <div className="right-cards">
      { sortedImagenesMatch.map( (imagen, index) => {
        return <div key={index} className="card">
            <img onClick={(event) => {handleClick(event, imagen.nombre)}} src={ imagen.src } alt="" />
          </div>
      } ) }
      </div>

      {/* { sortedImagenes.map( (imagen, index) => {
        return <div key={index} className="card">
            <img onClick={(event) => {handleClick(event, imagen.nombre)}} src={ imagen.src } alt="" />
          </div>
      } ) } */}

      {/* { matchImagenes.map( (imagen, index) => {
        return <div key={index} className="card">
            <img src={ imagen } alt="" />
          </div>
      } ) } */}
    </div>
    </div>
    </>
  )
}
