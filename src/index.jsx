import React from 'react'
import ReactDOM from 'react-dom/client'
import Tarjeta from './Props';
import Button from './DefaultProps';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
    <Button text="Go to" />
    <Button text="Help" />
    <Button />

    <Tarjeta
      name="Dan Angles"
      age={23}
      graduated={false}
      points={[99, 55, 66.2]}
    />
    <Tarjeta
      name="Azriel Soberano"
      age={23}
      graduated={true}
      points={[50,20,25]}
    />
  </>
);