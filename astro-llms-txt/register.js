/**
 * @type {() => import('astro').AstroIntegration}
 */

let files = new Map();

const generateLlmsTxt = () => {
  return (_, file) => {
    files.set(file.path, file);
  };
}

export default () => ({
  name: "astro-llms-txt",
  hooks: {
    'astro:config:setup': async ({ updateConfig }) => {
      updateConfig({
        markdown: {
          remarkPlugins: [generateLlmsTxt],
        }
      });
    },
    'astro:build:done': async () => {
      const filesArray = [...files.values()];
      const file = filesArray[0];
      console.log(Object.keys(file));
    },
  }
});
