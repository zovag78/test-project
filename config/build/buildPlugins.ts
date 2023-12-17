import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import  webpack from "webpack";

export function buildPlugins(path: string, isDev: boolean): webpack.WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: path
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "[id].css",
		}),
		new webpack.DefinePlugin({
			_IS_DEV_: JSON.stringify(isDev),
		}),
		new webpack.HotModuleReplacementPlugin(),
	];
}