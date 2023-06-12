import {axios} from "../axios/axios-config";

export interface UserLocationDTO {
  locationId?: number;
  user?: { userId: number };
  locationAddress: string;
  locationPhone: string;
}

export class UserLocationApi {
  async getUserLocation(userId: number): Promise<UserLocationDTO[]> {
    return axios.get<UserLocationDTO[]>(`/users/${userId}/locations`)
      .then((response) => response.data);
  }

  async postUserLocation(userLocation: UserLocationDTO): Promise<number> {
    return axios.post("/locations", userLocation)
      .then((response) => response.data);
  }
}
