import { BASE_API_URL } from "@/constants/index";
import { Position, RemoveResponse } from "@/types/position-types";

import axios, { AxiosResponse } from "axios";

// create axios instance
const http = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// export async function findAll(): Promise<AxiosResponse<any[]>> {
//     return await http.get<any[]>(`/position`);
// }

export async function findAll(): Promise<AxiosResponse<Position[]>> {
  return await http.get<Position[]>(`/position`);
}

export async function create(
  position: Position
): Promise<AxiosResponse<Position>> {
  const response = await http.post<Position>(`/position`, {
    title: position.title,
  });
  return response;
}

export async function findOne(id: number): Promise<AxiosResponse<Position>> {
  return await http.get<Position>(`/position/${id}`);
}

export async function update(
  id: number,
  position: Position
): Promise<AxiosResponse<Position>> {
  const response = await http.patch<Position>(`/position/${id}`, {
    title: position.title,
  });
  return response;
}

export async function remove(
  id: number
): Promise<AxiosResponse<RemoveResponse>> {
  return await http.delete<RemoveResponse>(`/position/${id}`);
}
