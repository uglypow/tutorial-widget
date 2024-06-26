const design_system = require("@nipacloud/nc-design-system/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  plugin: design_system,
  // corePlugins: {
  //   preflight: false, // Make some tailwind stles to not work
  // },
  // important: '#tutorial-modal', // Also fix layout break but might break the app
};