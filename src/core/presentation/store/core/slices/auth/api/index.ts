import { LoginDto, RegisterDto } from "../../../../../../domain/dto";
import { HttpMethod } from "../../../../../../domain/interface/http";
import { ApiEndpointBuilder } from "../../../api";

enum AuthenticationApiRoutes {
  login = "/user/login",
  register = "/user/register",
}

export const tagTypesAuth = ["Authentication"];

export const authEndpoints = (builder: ApiEndpointBuilder) => ({
  login: builder.mutation({
    query: (body: LoginDto) => ({
      url: AuthenticationApiRoutes.login,
      method: HttpMethod.POST,
      data: body,
    }),
  }),

  register: builder.mutation({
    query: (body: RegisterDto) => ({
      url: AuthenticationApiRoutes.register,
      method: HttpMethod.POST,
      data: body,
    }),
  }),
});
