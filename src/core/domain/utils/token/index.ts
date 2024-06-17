/**
 * Function to check if token is expired
 * @param { string } token - Token
 * @returns { boolean } - True if token is expired
 */
export const isExpired = (token?: string | null): boolean => {
    if (!token) {
      return true;
    }
  
    const [, payload] = token.split('.');
    const decodedPayload = JSON.parse(atob(payload));
    const now = Date.now() / 1000;
  
    return now > decodedPayload.exp;
  }