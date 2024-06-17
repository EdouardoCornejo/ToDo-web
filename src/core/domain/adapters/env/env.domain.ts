export abstract class EnvDomain {
    public abstract getEnv(envVariable: string, defaultValue: string): string;
  }
  