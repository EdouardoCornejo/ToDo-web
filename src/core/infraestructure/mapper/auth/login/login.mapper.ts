import { LoginSchema } from '../schema';
import { LoginEntity } from '../../../../domain/entity';

export class LoginMapper {
  public static toEntity(data: Record<string, unknown>): LoginEntity {
    const { token } = LoginSchema.parse(data);

    return { data: { token } } as unknown as LoginEntity;
  }
}
