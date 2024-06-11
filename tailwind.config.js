const design_system = require("@nipacloud/nc-design-system/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: ".my-prefix-my-prefix-", // Add your desired prefix here
  content: ["./src/**/*.tsx"],
  plugin: design_system,
  // corePlugins: {
  //   preflight: false, // Make border dissappear
  // },
  // important: '#tutorial-modal',
};