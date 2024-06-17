import { User } from "../entity";

export enum AuthenticationStatus {
    noAuthenticated = 'NO_AUTHENTICATED',
    authenticated = 'AUTHENTICATED',
  }
  
export interface Jwt extends User {
  iat: number;
  exp: number;
}

