module.exports = {
  webpack: (config) => {
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.oneOf instanceof Array) {
        rule.oneOf[rule.oneOf.length - 1].exclude = [
          /\.(js|mjs|zbin|jsx|ts|tsx)$/,
          /\.html$/,
          /\.json$/,
        ];
        return {
          ...rule,
          oneOf: [
            {
              test: /zcv\.wasm$/,
              type: "javascript/auto",
              loader: "file-loader",
              options: {
                outputPath: "static/wasm",
                name: "[name].[ext]",
              },
            },
            ...rule.oneOf,
          ],
        };
      }
      return rule;
    });

    config.resolve.extensions.push(".wasm");
    // config.output.webassemblyModuleFilename = "static/wasm/[name].[ext]";
    // config.experiments = { asyncWebAssembly: true };
    return config;
  },
};
