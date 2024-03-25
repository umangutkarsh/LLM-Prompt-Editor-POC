import { readFileSync, writeFileSync } from "fs";
import { compress } from "brotli";

let jsCode = readFileSync("./dist/_nuxt/DJ-LLF8i.js", "utf8");

let htmlBuffer = Buffer.from(jsCode, "utf8");

let compressed = compress(htmlBuffer, {
   mode: 0,
   quality: 11,
   lgwin: 22,
});

let base64Compressed = `export const compressedNuxtString=\`${Buffer.from(
   compressed
).toString("base64")}\``;

let compressedHtml = `export const compressedNuxtContent=\`${readFileSync(
   "./dist/index.html",
   "utf8"
)}\``;

writeFileSync("../prompteditor/assets/compressedNuxtContent.ts", compressedHtml);
writeFileSync("../prompteditor/assets/compressedNuxt.ts", base64Compressed);

console.log("Built at", new Date().toLocaleString());
