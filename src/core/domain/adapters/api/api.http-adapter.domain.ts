/**
 * HttpAdapter abstract class
 */
export abstract class HttpAdapter {
  public abstract request<T>(options: Record<string, unknown>): Promise<T>;

  public abstract get<T>(
    url: string,
    options?: Record<string, unknown>
  ): Promise<T>;

  public abstract post<T>(
    url: string,
    data: Record<string, unknown>,
    options?: Record<string, unknown>
  ): Promise<T>;

  public abstract put<T>(
    url: string,
    data: Record<string, unknown>,
    options?: Record<string, unknown>
  ): Promise<T>;

  public abstract delete<T>(
    url: string,
    options?: Record<string, unknown>
  ): Promise<T>;
}
