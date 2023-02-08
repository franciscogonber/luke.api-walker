export const crearResultado = (respuesta, recurso) => {
    let resultadoAtributo = {};
    switch (recurso) {
        case "people":
            resultadoAtributo = {
                titulo: respuesta.name,
                atributo1: "Gender: ",
                contenido1: respuesta.gender,
                atributo2: "Hair color: ",
                contenido2: respuesta.hair_color,
                atributo3: "Height: ",
                contenido3: respuesta.height,
                atributo4: "Mass: ",
                contenido4: respuesta.mass
            };
            break;
        case "films":
            resultadoAtributo = {
                titulo: respuesta.title,
                atributo1: "Opening: ",
                contenido1: respuesta.opening_crawl,
                atributo2: "Producer: ",
                contenido2: respuesta.producer,
                atributo3: "Created ",
                contenido3: respuesta.created,
                atributo4: "Director ",
                contenido4: respuesta.director
            };
            break;
        case "starships":
            resultadoAtributo = {
                titulo: respuesta.name,
                atributo1: "Model: ",
                contenido1: respuesta.model,
                atributo2: "Class ",
                contenido2: respuesta.starship_class,
                atributo3: "Passenger ",
                contenido3: respuesta.passengers,
                atributo4: "Manufacturer: ",
                contenido4: respuesta.manufacturer
            };
            break;
        case "vehicles":
            resultadoAtributo = {
                titulo: respuesta.name,
                atributo1: "Model: ",
                contenido1: respuesta.model,
                atributo2: "Class ",
                contenido2: respuesta.vehicles_class,
                atributo3: "Passenger ",
                contenido3: respuesta.passengers,
                atributo4: "Manufacturer: ",
                contenido4: respuesta.manufacturer
            };
            break;
        case "species":
            resultadoAtributo = {
                titulo: respuesta.name,
                atributo1: "Laguage: ",
                contenido1: respuesta.language,
                atributo2: "Hair colors: ",
                contenido2: respuesta.hair_colors,
                atributo3: "Eye colors: ",
                contenido3: respuesta.eye_colors,
                atributo4: "Skin colors: ",
                contenido4: respuesta.skin_colors
            };
            break;
        case "planets":
            resultadoAtributo = {
                titulo: respuesta.name,
                atributo1: "Gravity: ",
                contenido1: respuesta.gravity,
                atributo2: "Climate: ",
                contenido2: respuesta.climate,
                atributo3: "population: ",
                contenido3: respuesta.population,
                atributo4: "Terrain: ",
                contenido4: respuesta.terrain
            };
            break;

    }
    return resultadoAtributo;
}