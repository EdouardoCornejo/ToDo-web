import * as jwtDecode from 'jwt-decode';
import { JwtAdapter } from './jwt.infraestructure';

/**
 * JWT adapter instance.
 */
export const JWT = new JwtAdapter(jwtDecode);
