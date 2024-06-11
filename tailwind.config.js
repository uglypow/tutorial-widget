const design_system = require("@nipacloud/nc-design-system/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: "tw-",
  content: ["./src/**/*.tsx"],
  plugin: design_system,
  important: true,
};
