import path from "path";
import { Compiler } from "webpack";
import tsconfig from "../../tsconfig.json";

class TsConfigPathsResolvePlugin {
  apply(compiler: Compiler) {
    const tsPaths = tsconfig.compilerOptions.paths;
    const rootDir = path.resolve(__dirname, "../../");

    compiler.options.resolve.alias = {};

    for (const [alias, paths] of Object.entries(tsPaths)) {
      compiler.options.resolve.alias[alias.replace("/*", "")] = path.resolve(
        rootDir,
        paths[0].replace("/*", "")
      );
    }
  }
}

export default TsConfigPathsResolvePlugin;
