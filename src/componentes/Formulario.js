import axios from 'axios';
import React from 'react'
import { crearResultado } from '../helper';

const formulario = ({ recurso, setRecurso, id, setId, resultado, setResultado }) => {
    const buscar = (evento) => {
        evento.preventDefault();
        axios.get("https://swapi.dev/api/" + recurso + "/" + id)
            .then(respuesta => {
                setResultado(crearResultado(respuesta.data, recurso));
                console.log(respuesta);
            })
            .catch(error => {
                console.log(error);
                setResultado("Error");
            })
    }
    return (
        <form onSubmit={buscar}>
            <label>Search for: </label>
            <select value={recurso} onChange={(elemento) => setRecurso(elemento.target.value)} className="form-select" aria-label="Default select example">
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
            <label>ID: </label>
            <input onChange={(elemento) => setId(elemento.target.value)} type={"number"} min="1" required ></input>
            <button className='btn btn-secondary' type='submit'>Search</button>
        </form >
    )
}

export default formulario
