const design_system = require("@nipacloud/nc-design-system/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: "-",
  content: ["./src/**/*.tsx"],
  plugin: design_system,
  corePlugins: {
    preflight: false,
  },
  important: true,
};
