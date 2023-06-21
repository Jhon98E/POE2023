import axios from "axios";

const baseurl = 'http://localhost:8000/api/';

export const crearConfiguracion = (metodo, url, informacion) => {
    return {
        method: metodo,
        url: baseurl + url,
        data: informacion
    }
}

export const crearConfiguracionSinInformacion = (metodo, url) => {
    return {
        method: metodo,
        url: baseurl + url,
    }
}

export const guardarCarro = async (informacion) => {
    try {
        const configuracion = crearConfiguracion("post", "carros/", informacion)
        const respuesta = await axios(configuracion)
        if (respuesta.status === 201) {
            console.log(respuesta)
        }
        return respuesta.status;
    } catch(error) {
        console.log(error)
    }
}

export const traerTodosLosCarros = async (informacion) => {
    try {
        const configuracion = crearConfiguracionSinInformacion("get", "carros/")
        const respuesta = await axios(configuracion)
        if (respuesta.status === 200) {
            console.log(respuesta)
        }
        return respuesta.data;
    } catch(error) {
        console.log(error)
    }
}
