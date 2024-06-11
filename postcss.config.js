const config = {
  plugins: {
    "postcss-import": {
      resolve: (id, basedir) => {
        if (id.startsWith("~")) {
          return require.resolve(id.slice(1), { paths: [basedir] })
        }
        return id
      },
    },
    tailwindcss: {},
    autoprefixer: {},
    // "postcss-prefix-selector": {
    //   prefix: "-oak",
    //   transform: (prefix, selector, prefixedSelector) => {
    //     if (selector.startsWith(".")) {
    //       return prefix + selector
    //     }
    //     return selector
    //   },
    // },
  },
}

module.exports = config
