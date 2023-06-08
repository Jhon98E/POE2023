import axios from "axios";


const baseurl = "http://localhost:8080/api";

export const crearConfiguracion = (metodo, url, informacion) => {
    return {
        method: metodo,
        url: baseurl + url,
        data: informacion
    }
}

export const hacerPeticion = async(informacion) => {
    try {
        const configuracion = crearConfiguracion("post", "lugar/", informacion)
        const respuesta = await axios(configuracion)
        if (respuesta.status === 201) {
            console.log(respuesta)
        }
        return respuesta.status;
    }catch(error) {
        console.log(error)
    }
}