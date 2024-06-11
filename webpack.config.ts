import autoprefixer from "autoprefixer";
import path from "path";
import postcssImport from "postcss-import";
import postcssNestedImport from "postcss-nested-import";
import tailwindcss from "tailwindcss";
import TerserWebpackPlugin from "terser-webpack-plugin";
import { ProgressPlugin } from "webpack";
import { ConfigOptions } from "webpack-cli";
import important from "./plugins/postcss/important";
import TsConfigPathsResolvePlugin from "./plugins/webpack/tsconfigPathsResolve";


const postcssOptions = {
  plugins: [
    postcssImport(),
    postcssNestedImport(),
    tailwindcss(),
    important(),
    autoprefixer(),
  ],
};
const config: ConfigOptions = {
  mode: "development",
  entry: "./src/index.ts",
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
    library: {
      type: "module",
    },
    filename: (pathData) => {
      const chunk = pathData.chunk!;

      if (chunk.name === "main") {
        return "index.js";
      }

      return "[name].js";
    },
    assetModuleFilename: "assets/[name][ext]",
    clean: true,
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions,
          //   },
          // },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions,
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  "postcss-nested-import": {},
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|jpg|jpeg|png|woff|eot|gif|ttf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [new ProgressPlugin(), new TsConfigPathsResolvePlugin()],
  resolve: {
    extensions: ["", ".js", ".ts", ".jsx", ".tsx"],
    modules: ["node_modules"],
  },
};

export default config;