import path from 'path';
import webpack from 'webpack';
import { buildEnv, buildPath } from './config/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: buildEnv) => {
  const paths: buildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  
  const PORT = env.port || 3000;
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode || 'development',
    path: paths,
    port: PORT,
  });

  return config;
};