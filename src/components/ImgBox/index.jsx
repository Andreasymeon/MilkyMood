import React, {useState, useEffect} from 'react'
import {Image} from './styles'

const ImgBox = ({x, y, percent}) => {
  const [position, setPosition] = useState([0, 0])

  useEffect(() => {
    setPosition([
      Math.random() * 320 - x * 80 - 50,
      Math.random() * 480 - y * 80 - 50
    ])
  }, [x, y])

  return (
    <Image
      $initialX={x}
      $initialY={y}
      $movedX={position[0] * percent}
      $movedY={position[1] * percent}
    />
  )
}

export default ImgBox
