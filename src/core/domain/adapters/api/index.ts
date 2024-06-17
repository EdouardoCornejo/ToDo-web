import axios from 'axios';

import { env } from '../env';
import { AxiosAdapter } from './api.infrastructure';

export const api = new AxiosAdapter(
  axios.create({
    url: env.urlBackend,
  }),
);
