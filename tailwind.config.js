const design_system = require("@nipacloud/nc-design-system/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  plugin: design_system,
};
