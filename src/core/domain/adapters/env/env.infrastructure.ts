import { EnvDomain } from "./env.domain";

export class EnvAdapter implements EnvDomain {
  public getEnv(envVariable: string, defaultValue?: string): string {
    return (import.meta.env[envVariable] as string) || defaultValue || '';
  }
}
