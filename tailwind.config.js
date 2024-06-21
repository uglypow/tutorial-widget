const design_system = require("@nipacloud/nc-design-system/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: ".my-prefix-my-prefix-",
  content: ["./src/**/*.tsx"],
  plugin: design_system,
  // corePlugins: {
  //   preflight: false, // Make border dissappear somehow
  // },
  // important: '#tutorial-modal', // Also work but sometime doesn't override
};