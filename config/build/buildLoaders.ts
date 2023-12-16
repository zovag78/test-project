import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { buildOptions } from "../types/config";

export function buildLoaders(options: buildOptions): webpack.RuleSetRule[] {
  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => {
              if (resPath.includes(".module.scss")) {
                return true;
              }
              return false;
            },
            localIdentName: options.mode === "development" ? "[path][name]__[local]" : "[hash:base64]",
          },
          
          
        },
      },
      "sass-loader",
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }
    return [
        typescriptLoader,
        cssLoaders,
        fileLoader
    ];
}