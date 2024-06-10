const config = {
  plugins: {
    "postcss-import": {
      resolve: (id, basedir) => {
        if (id.startsWith("~")) {
          return require.resolve(id.slice(1), { paths: [basedir] });
        }
        return id;
      },
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};

module.exports = config;