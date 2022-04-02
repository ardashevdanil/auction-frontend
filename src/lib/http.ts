import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { logger } from "@lib/logger";

class HttpProvider {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_HOST,
    });
    this.instance.interceptors.request.use(this.logRequest);
    this.instance.interceptors.response.use(this.logResponse);
  }

  private instance: AxiosInstance;

  logRequest(req: AxiosRequestConfig) {
    logger.httpReq({
      url: req?.url,
      method: req?.method,
      params: req?.params,
    });
    return req;
  }

  logResponse(res: AxiosResponse) {
    logger.httpRes({
      status: res?.status,
      data: res?.data,
      url: res?.config?.url,
    });
    return res;
  }

  request<T = any>(config: AxiosRequestConfig) {
    return this.instance.request<T>(config);
  }

  setHeader(name: string, value: string) {
    this.instance.defaults.headers.common[name] = value;
  }
}

export const http = new HttpProvider();
