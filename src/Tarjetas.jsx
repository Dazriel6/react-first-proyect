


function Tarjeta(props){
    return (<>
                <h1>Hola {props.name}</h1>
                <p>Tienes: {props.age}</p>
                <ul>
                    <li>{props.points[0]}</li>
                    <li>{props.points[1]}</li>
                    <li>{props.points[2]}</li>
                </ul>
            
            </>)
} 
export default Tarjeta