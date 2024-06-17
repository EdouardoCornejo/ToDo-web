import { AxiosError, AxiosRequestConfig } from "axios";
import { env } from "../../../../../domain/adapters/env";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { api } from "../../../../../domain/adapters/api";

export class RtkQueryClient {
  private readonly baseUrl = env.urlBackend;

  constructor() {
    this.httpsClient = this.httpsClient.bind(this);
  }

  private configApiReq<T>(
    axiosRequestConfig: AxiosRequestConfig<T>
  ): AxiosRequestConfig<T> {
    const apiReqConfig = {
      ...axiosRequestConfig,
      url: this.baseUrl + axiosRequestConfig.url,
    };
    const authToken = localStorage.getItem("token")?.replace(/"/g, '');
  
    if (authToken) {
      apiReqConfig.headers = {
        ...apiReqConfig.headers,
        Authorization: `Bearer ${authToken}`,
      };
    }
    return apiReqConfig;
  }

  public httpsClient<ResultType = unknown, ErrorType = unknown>(): BaseQueryFn<
    AxiosRequestConfig,
    ResultType,
    ErrorType
  > {
    return async (axiosRequestConfig) => {
      try {
        const result = await api.request({...this.configApiReq(axiosRequestConfig)});
  
        return { data:{ data: result  }} as { data: ResultType };
      } catch (axiosError) {
        const err = axiosError as AxiosError;
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data,
          } as ErrorType,
        };
      }
    };
  }
}

export const { httpsClient } = new RtkQueryClient();
