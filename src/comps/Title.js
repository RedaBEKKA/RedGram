import React from 'react';
import Wiv from 'react-wiv'

const Title = () => {
  return (
    <div className="title">
      <Wiv color="#efb6b0" height={4} tightness={6} thickness={2} speed={0.55}>
        RedGram
      </Wiv>
      
      <h2>Les photos</h2>
      <p>Importez vos photos et visualisez vos images a tout moments.</p>
    </div>
  )
}

export default Title;