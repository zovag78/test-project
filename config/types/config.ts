export type buildMode = "development" | "production";

export interface buildPath {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface buildOptions {
  mode: buildMode;
  path: buildPath;
  port?: number;
}

export interface buildEnv {
  mode: buildMode;
  port: number;
}