import React from 'react'
import ReactDOM from 'react-dom/client'
import Tarjeta from './Tarjetas';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <Tarjeta 
        name="Dan Angles"
        age={23}
        graduated={false}
        points={[99,55,66.2]}
        />
);