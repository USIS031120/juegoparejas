import arbusto from '../img/arbusto.jpg'
import letraarbusto from '../img/letra-arbusto.png'
import colina from '../img/colina.jpg'
import letracolina from '../img/letra-colina.png'
import consejo from '../img/consejo.jpg'
import letraconsejo from '../img/letra-consejo.png'
import dia from '../img/dia.jpg'
import letradia from '../img/letra-dia.png'
import lobo from '../img/lobo.jpg'
import letralobo from '../img/letra-lobo.png'
import luna from '../img/luna.jpg'
import letraluna from '../img/letra-luna.png'
import ovejas from '../img/ovejas.jpg'
import letraovejas from '../img/letra-ovejas.png'
import pasto from '../img/pasto.jpg'
import letrapasto from '../img/letra-pasto.png'
import pastor from '../img/pastor.jpg'
import letrapastor from '../img/letra-pastor.png'
import pedro from '../img/pedro.jpg'
import letrapedro from '../img/letra-pedro.png'
import pueblo from '../img/pueblo.jpg'
import letrapueblo from '../img/letra-pueblo.png'
import tio from '../img/tío.jpg'
import letratio from '../img/letra-tio.png'
import { useEffect, useState } from 'react'

// import { importImages } from './importarImgenes'

export const useImagenes = () => {


  const [imagenes, setImagenes] = useState([
    {
      nombre: 'arbusto',
      src: arbusto
    },
    {
      nombre: 'colina',
      src: colina
    },
    {
      nombre: 'consejo',
      src: consejo
    },
    {
      nombre: 'dia',
      src: dia
    },

    {
      nombre: 'lobo',
      src: lobo
    },
    {
      nombre: 'luna',
      src: luna
    },
    {
      nombre: 'ovejas',
      src: ovejas
    },
    {
      nombre: 'pasto',
      src: pasto
    },
    {
      nombre: 'pastor',
      src: pastor
    },
    {
      nombre: 'pedro',
      src: pedro
    },
    {
      nombre: 'pueblo',
      src: pueblo
    },
    {
      nombre: 'tio',
      src: tio
    },

  ])

  const [matchImagenes, setMatchImagenes] = useState([
    {
      nombre: 'arbusto',
      src: letraarbusto
    },
    {
      nombre: 'colina',
      src: letracolina
    },
    {
      nombre: 'consejo',
      src: letraconsejo
    },
    {
      nombre: 'dia',
      src: letradia
    },

    {
      nombre: 'lobo',
      src: letralobo
    },
    {
      nombre: 'luna',
      src: letraluna
    },
    {
      nombre: 'ovejas',
      src: letraovejas
    },
    {
      nombre: 'pasto',
      src: letrapasto
    },
    {
      nombre: 'pastor',
      src: letrapastor
    },
    {
      nombre: 'pedro',
      src: letrapedro
    },
    {
      nombre: 'pueblo',
      src: letrapueblo
    },
    {
      nombre: 'tio',
      src: letratio
    },

  ])

  const [imgs, setImgs] = useState([])
  const [imgsMatch, setImgsMatch] = useState([])



  return {
    imagenes,
    matchImagenes

  }
}
