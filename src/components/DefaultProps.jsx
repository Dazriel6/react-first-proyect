import PropTypes from "prop-types";


function Button({ text }) {
  return (
    <button onClick={() => {
          fetch("https://pokeapi.co/api/v2/pokemon/ditto")
          .then((response) => response.json())
          .then((data) => console.log(data));
          }}>
        {text}
    </button>
  );
}

// PropTypes permite generar mensajes para observar si se esta pasando un tipo de dato incorrecto mediante los props

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: "Que hay",
  //valor por defecto separado del componente
};

export default Button;
