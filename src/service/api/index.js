import axios from "axios";

const baseURL = "https://todo.api.devcode.gethired.id/";
const hitApi = axios.create({
  baseURL: baseURL,
});

hitApi.interceptors.request.use((request) => {
  console.log("request", request);
  return request;
});

hitApi.interceptors.response.use((response) => {
  console.log("response ", response);
  return response;
});

export const hitData = (requestParams) => {
  console.log("cek email", requestParams);
  return hitApi.get(
    `activity-groups?email=${requestParams.email}`,
    requestParams
  );
};
export const hitDelete = (requestParams) => {
  console.log("requestparams ", requestParams);
  return hitApi.delete(`activity-groups/${requestParams.id}`, requestParams);
};
export const hitAddData = (requestParams) => {
  return hitApi.post("activity-groups", requestParams);
};
