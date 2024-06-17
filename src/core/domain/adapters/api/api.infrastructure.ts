import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { HttpAdapter } from './api.http-adapter.domain';

export class AxiosAdapter implements HttpAdapter {
  public constructor(private readonly axiosInstance: AxiosInstance) {}

  
  public async request<T>(options: AxiosRequestConfig): Promise<T> {
    const { data } = await this.axiosInstance.request<T>(options);
    return data;
  }
  
  public async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    const { data } = await this.axiosInstance.get<T>(url, options);
    return data;
  }

  public async post<T>(
    url: string,
    data: Record<string, unknown>,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    const { data: resultData } = await this.axiosInstance.post<T>(
      url,
      data,
      options,
    );

    return resultData;
  }

  public async put<T>(
    url: string,
    data: Record<string, unknown>,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    const { data: resultData } = await this.axiosInstance.put<T>(
      url,
      data,
      options,
    );

    return resultData;
  }

  public async delete<T>(
    url: string,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    const { data } = await this.axiosInstance.delete<T>(url, options);

    return data;
  }

}
