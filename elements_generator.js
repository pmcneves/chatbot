const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/chat-element/runtime.js",
    "./dist/chat-element/polyfills.js",
    // './dist/chat-element/scripts.js',
    "./dist/chat-element/main.js",
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/element.js");
  await fs.copyFile("./dist/chat-element/styles.css", "elements/styles.css");
  // await fs.copy('./dist/chat-element/assets/', 'elements/assets/' )
})();
