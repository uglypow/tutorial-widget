import { PluginCreator } from "postcss";

const plugin: PluginCreator<{}> = (opts = {}) => {
  return {
    postcssPlugin: "important",
    Rule(rule, helper) {
      if (/\#tutorial-widget/.test(rule.selector)) {
        rule.walkDecls((decl) => {
          decl.important = true;
        });
      }
    },
  };
};

plugin.postcss = true;

export default plugin;
