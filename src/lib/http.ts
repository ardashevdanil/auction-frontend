import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpProvider {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_HOST,
    });
  }

  private instance: AxiosInstance;

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export const http = new HttpProvider();
