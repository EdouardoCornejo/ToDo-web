export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface FetchControl {
  isLoading: boolean;
  error: boolean;
  errorMessage: string;
}