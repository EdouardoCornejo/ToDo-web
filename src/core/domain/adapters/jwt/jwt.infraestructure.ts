import jwtDecode, { JwtPayload } from 'jwt-decode';
import { TokenDomain } from './jwt.domain';


export class JwtAdapter implements TokenDomain {
    public constructor(private readonly jwt: typeof jwtDecode) { }

    public decoded<T>(token: string): T {
        return this.jwt.jwtDecode(token);
    }

    public isExpiredJWT(token: string): boolean {
        const { exp }: JwtPayload = this.jwt.jwtDecode(token);

        const currentTime = Math.floor(Date.now() / 1000);

        return currentTime > exp!;
    }
}
