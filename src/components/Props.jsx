function Tarjeta({ name, age, graduated, points }) {
  return (
    <>
      <h1>Hola {name}</h1>
      <p>Tienes: {age}</p>
      <h3> {graduated ? "Ya te graduaste!!!" : "Ya pronto te graduas"} </h3>
      <ul>
        <li>{points[0]}</li>
        <li>{points[1]}</li>
        <li>{points[2]}</li>
      </ul>
    </>
  );
}

export default Tarjeta;
