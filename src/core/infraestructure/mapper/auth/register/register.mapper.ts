/* eslint-disable @typescript-eslint/no-explicit-any */
import { RegisterEntity } from "../../../../domain/entity";
import { RegisterSchema } from "../schema";

export class RegisterMapper {
    public static toEntity(data: Record<string, any>): RegisterEntity {
        const { email, name, password } = RegisterSchema.parse(data)

        return { data: { email, name, password } } as unknown as RegisterEntity;
    }
}