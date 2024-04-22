import { fetchUtils } from "react-admin";

const API_URL = "https://jsonplaceholder.typicode.com";

export const dataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}?_pages=${page}&_limit=${perPage}&_sort=${field}`
    );

    return {
      data: response.json,
      total: parseInt(response.json.length || "", 10),
    };
  },
  getOne: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.id}`
    );
    return { data: response.json };
  },
  update: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify(params.data),
      },
      
    );
    return { data: response.json };
  },
  delete: async (resource, params) => {
    const response = await fetchUtils.fetchJson(
      `${API_URL}/${resource}/${params.id}`,
      {
        method: "DELETE",
      }
    );

    return { data: response.json };
  },
  create: async (resource, params) => {
    const response = await fetchUtils.fetchJson(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: response.json };
  },
};
