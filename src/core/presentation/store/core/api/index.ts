import { EndpointBuilder, createApi } from "@reduxjs/toolkit/query";
import { authEndpoints, tagTypesAuth } from "../slices/auth/api";
import { httpsClient } from "../../shared";
import { tagTypesTodo, todoEndpoints } from "../slices/todo";

const reducerPath = "coreApi";

const tagTypes = [...tagTypesAuth, ...tagTypesTodo];

export const baseQuery = httpsClient();

export const coreApi = createApi({
  reducerPath,
  baseQuery,
  tagTypes,
  endpoints: (builder) => ({
    ...authEndpoints(builder),
    ...todoEndpoints(builder),
  }),
  refetchOnFocus: true,
  refetchOnReconnect: false,
});

export type ApiEndpointBuilder = EndpointBuilder<
  typeof baseQuery,
  (typeof tagTypes)[number],
  typeof reducerPath
>;
