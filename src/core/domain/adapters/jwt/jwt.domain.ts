
export abstract class TokenDomain {
    public abstract decoded<T>(token: string): T;
    public abstract isExpiredJWT(token: string): boolean;
  }
  