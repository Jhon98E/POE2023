import axios from "axios";

const baseurl = "http://localhost:8000/api/";

export const getConfig = (method, url) => {
  return {
    method,
    url: baseurl + url,
  };
};

export const getConfigData = (method, url, data) => {
  return {
    method,
    url: baseurl + url,
    data: data,
  };
};

export const guardarLugar = async (user) => {
  try {
    const config = getConfigData("post", "lugares/", user);
    const response = await axios(config);
    if (response.status === 201) {
      console.log(response.data);
    }
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const traerTodosLosLugares = async () => {
  try {
    const config = getConfigData("get", "lugares/");
    const response = await axios(config);
    if (response.status === 200) {
      console.log(response.data);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const traerPorNombre = async (nombre) => {
  try {
    const config = getConfigData("get", "lugares/?nombre="+nombre);
    const response = await axios(config);
    if (response.status === 200) {
      console.log(response.data);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const traerPorNombreYPais = async (nombre, pais) => {
  try {
    const config = getConfigData("get", "lugares/?nombre="+nombre+"&pais="+pais);
    const response = await axios(config);
    if (response.status === 200) {
      console.log(response.data);
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
