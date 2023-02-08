import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

const Resultado = ({ resultado, setResultado }) => {
    const {id}= useParams();
    if (id){
        axios.get("https://swapi.dev/api/people/" + id)
        .then(respuesta => {
            let resultadoAtributo = {
                titulo: respuesta.data.name,
                atributo1: "Gender: ",
                contenido1: respuesta.data.gender,
                atributo2: "Hair color: ",
                contenido2: respuesta.data.hair_color,
                atributo3: "Height: ",
                contenido3: respuesta.data.height,
                atributo4: "Mass: ",
                contenido4: respuesta.data.mass
            };
            setResultado(resultadoAtributo);
        })
        .catch(error => {
            console.log(error);
            setResultado("Error");
        })
    }
    if (resultado === "Error") {
        return (
            <div>
                <h2>Estos no son los droides que está buscando</h2>
                <img width={150} alt="Obi-Wan" src='https://media.vanityfair.com/photos/5d56eac902bf930008778de7/3:2/w_1998,h_1332,c_limit/obi-wan-ewan-series.jpg'></img>
            </div>
        )
    } else {
        return (
            <div>
                {resultado && (
                    <div>
                        <h2>{resultado.titulo}</h2>
                        <p>{resultado.atributo1} {resultado.contenido1}</p>
                        <p>{resultado.atributo2} {resultado.contenido2}</p>
                        <p>{resultado.atributo3} {resultado.contenido3}</p>
                        <p>{resultado.atributo4} {resultado.contenido4}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default Resultado
