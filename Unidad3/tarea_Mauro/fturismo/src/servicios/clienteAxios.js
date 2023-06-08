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
    data,
  };
};

export const doRequest = async (user) => {
  try {
    const config = getConfigData("post", "lugares/", user);
    const response = await axios(config);
    if (response.status === 200) {
      console.log(response.data);
    }
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
