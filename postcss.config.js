const prefixwrap = require('postcss-prefixwrap');

const config = {
  plugins: [
    require('postcss-import')({
      resolve: (id, basedir) => {
        if (id.startsWith("~")) {
          return require.resolve(id.slice(1), { paths: [basedir] });
        }
        return id;
      }
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    prefixwrap('.prefix-wrap')
  ]
};

module.exports = config;
