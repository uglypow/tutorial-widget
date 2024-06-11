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
    // 'postcss-rename': {
    //   prefix: '-',
    // },
  },
};

module.exports = config;