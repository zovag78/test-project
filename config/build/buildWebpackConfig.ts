import webpack from "webpack";
import { buildOptions } from "../types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: buildOptions): webpack.Configuration {
	const {path, mode} = options;
	return {
		mode: mode,
		entry: path.entry,
		module: {
			rules: buildLoaders(options),
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"],
			preferAbsolute: true,
			modules: [
				path.src,
				"node_modules"
			],
			alias: {
				"@": path.src,
			}
		},
		plugins: buildPlugins(path.html, mode === "development"),
		output: {
			filename: "[name].[contenthash].js",
			path: path.build,
			clean: true
		},
		devtool: mode === "development" ? "inline-source-map" : undefined,
		devServer: mode === "development" ? buildDevServer(options) : undefined,
	};
}