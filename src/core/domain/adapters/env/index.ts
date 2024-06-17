import { EnvAdapter } from "./env.infrastructure";


const envAdapter = new EnvAdapter();

export const env = {
  urlBackend: envAdapter.getEnv(
    'VITE_API_URL',
    'http://localhost:4000',
  ),
  nodeEnv: envAdapter.getEnv(
    'VITE_NODE_ENV',
    'http://localhost:4000',
  ),
};
