// import fs from 'fs-extra'
// import brotli from 'brotli';

// // Define the path to your output/public directory
// const outputDir = './output/public';

// // Function to compress a file and encode it to Base64
// async function compressAndEncode(filePath) {
//    const fileContent = await fs.readFile(filePath);
//    const compressed = brotli.compress(fileContent, {
//       mode: 0, // 0 = generic, 1 = text, 2 = font (default)
//       quality: 11, // Quality level (0-11)
//       lgwin: 22, // Window size (0-24)
//    });
//    const base64Compressed = Buffer.from(compressed).toString('base64');
//    return base64Compressed;
// }

// // Function to process the entry point file
// async function processEntryPoint() {
//    const entryPointPath = `${outputDir}/_nuxt/entry.ea1d6c59.js`;
//    const base64Compressed = await compressAndEncode(entryPointPath);
//    console.log(`Processed: ${entryPointPath} -> Base64 Compressed`);

//    // Write the compressed string to a TypeScript file
//    const tsFileContent = `export const compressedString = \`${base64Compressed}\`;`;
//    await fs.writeFile('./scripts/compressedEntryPoint.ts', tsFileContent);
//    console.log('Compressed string written to compressedEntryPoint.ts');
// }

// // Run the process
// processEntryPoint().catch(console.error);


// import fs from 'fs';
// import brotli from 'brotli';

// // Define the path to your output/public directory
// const outputDir = './output/public';

// // Function to compress a file and encode it to Base64
// function compressAndEncode(filePath) {
//    const fileContent = fs.readFileSync(filePath, "utf-8");
//    const compressed = brotli.compress(fileContent, {
//       mode: 0, // 0 = generic, 1 = text, 2 = font (default)
//       quality: 11, // Quality level (0-11)
//       lgwin: 22, // Window size (0-24)
//    });
//    const base64Compressed = Buffer.from(compressed).toString('base64');
//    return base64Compressed;
// }

// // Function to process the entry point file
// function processEntryPoint() {
//    const entryPointPath = `${outputDir}/_nuxt/entry.ea1d6c59.js`;
//    try {
//       const base64Compressed = compressAndEncode(entryPointPath);
//       console.log(`Processed: ${entryPointPath} -> Base64 Compressed`);

//       // Write the compressed string to a TypeScript file
//       const tsFileContent = `export const compressedString = \`${base64Compressed}\`;`;
//       fs.writeFileSync('./scripts/compressedEntryPoint.ts', tsFileContent);
//       console.log('Compressed string written to compressedEntryPoint.ts');
//    } catch (error) {
//       console.error(`Error processing ${entryPointPath}:`, error);
//    }
// }

// // Run the process
// processEntryPoint();

// import { readFileSync, writeFileSync } from "fs";
// import { compress } from "brotli";

// let jsCode = readFileSync("./output/public", "utf8");

// let htmlBuffer = Buffer.from(jsCode, "utf8");

// let compressed = compress(htmlBuffer, {
//    mode: 0,
//    quality: 11,
//    lgwin: 22,
// });

// let base64Compressed = `export const compressedString=\`${Buffer.from(
//    compressed
// ).toString("base64")}\``;

// writeFileSync("./scripts/compressedEntryPoint.ts", base64Compressed);

// console.log("Built at", new Date().toLocaleString());


// import { promises as fs } from 'fs';
// import brotli from 'brotli';

// // Define the path to your output/public directory
// const outputDir = './output/public';

// // Function to compress a file and encode it to Base64
// async function compressAndEncode(filePath) {
//    try {
//       const fileContent = await fs.readFile(filePath);
//       const compressed = brotli.compress(fileContent, {
//          mode: 0, // 0 = generic, 1 = text, 2 = font (default)
//          quality: 11, // Quality level (0-11)
//          lgwin: 22, // Window size (0-24)
//       });
//       const base64Compressed = Buffer.from(compressed).toString('base64');
//       return base64Compressed;
//    } catch (error) {
//       console.error(`Error compressing file: ${filePath}`, error);
//       throw error;
//    }
// }

// // Function to process the entry point file
// async function processEntryPoint() {
//    const entryPointPath = `${outputDir}/_nuxt/entry.ea1d6c59.js`;
//    try {
//       const base64Compressed = await compressAndEncode(entryPointPath);
//       console.log(`Processed: ${entryPointPath} -> Base64 Compressed`);

//       // Write the compressed string to a TypeScript file
//       const tsFileContent = `export const compressedString = \`${base64Compressed}\`;`;
//       await fs.writeFile('./scripts/compressedEntryPoint.ts', tsFileContent);
//       console.log('Compressed string written to compressedEntryPoint.ts');
//    } catch (error) {
//       console.error('Error processing entry point file', error);
//    }
// }

// // Run the process
// processEntryPoint().catch(console.error);


// import fs from 'fs';
// import brotli from 'brotli';

// // Define the path to your output/dist directory
// const outputDir = './output/dist';

// // Function to compress a file and encode it to Base64
// function compressAndEncode(filePath) {
//    const fileContent = fs.readFileSync(filePath);
//    const compressed = brotli.compress(fileContent, {
//       mode: 0, // 0 = generic, 1 = text, 2 = font (default)
//       quality: 11, // Quality level (0-11)
//       lgwin: 22, // Window size (0-24)
//    });
//    const base64Compressed = Buffer.from(compressed).toString('base64');
//    return base64Compressed;
// }

// // Function to process the entry point file
// function processEntryPoint() {
//    const entryPointPath = `${outputDir}/_nuxt/entry.ea1d6c59.js`;
//    try {
//       const base64Compressed = compressAndEncode(entryPointPath);
//       console.log(`Processed: ${entryPointPath} -> Base64 Compressed`);

//       // Write the compressed string to a TypeScript file
//       const tsFileContent = `export const compressedString = \`${base64Compressed}\`;`;
//       fs.writeFileSync('./scripts/compressedEntryPoint.ts', tsFileContent);
//       console.log('Compressed string written to compressedEntryPoint.ts');
//    } catch (error) {
//       console.error(`Error processing ${entryPointPath}:`, error);
//    }
// }

// // Run the process
// processEntryPoint();


// import { readFileSync, writeFileSync } from "fs";
// import { compress } from "brotli";

// // Paths to your main HTML and bundle entry file
// const mainHtmlPath = "./dist/sk/index.html";
// const bundleEntryPath = "./dist/_nuxt/entry.ea1d6c59.js";

// // Read the files
// const mainHtml = readFileSync(mainHtmlPath, "utf8");
// const bundleEntry = readFileSync(bundleEntryPath, "utf8");

// // Compress the files
// const compressedMainHtml = compress(Buffer.from(mainHtml, "utf8"), {
//    mode: 0,
//    quality: 11,
//    lgwin: 22,
// });
// const compressedBundleEntry = compress(Buffer.from(bundleEntry, "utf8"), {
//    mode: 0,
//    quality: 11,
//    lgwin: 22,
// });

// // Encode the compressed data to Base64
// const base64CompressedMainHtml = `export const compressedMainHtml=\`${Buffer.from(compressedMainHtml).toString("base64")}\``;
// const base64CompressedBundleEntry = `export const compressedBundleEntry=\`${Buffer.from(compressedBundleEntry).toString("base64")}\``;

// // Write the encoded data to TypeScript files
// writeFileSync("./scripts/compressedMainHtml.ts", base64CompressedMainHtml);
// writeFileSync("./scripts/compressedBundleEntry.ts", base64CompressedBundleEntry);

// console.log("Compressed and encoded files at", new Date().toLocaleString());


// import { readFileSync, writeFileSync } from "fs";
// import { compress } from "brotli";

// // Paths to your main HTML and bundle entry file
// const mainHtmlPath = "./.output/public/sk/index.html";
// const bundleEntryPath = "./.output/public/_nuxt/entry.ea1d6c59.js";

// // Read the files
// const mainHtml = readFileSync(mainHtmlPath, "utf8");
// const bundleEntry = readFileSync(bundleEntryPath, "utf8");

// // Compress the files
// const compressedMainHtml = compress(Buffer.from(mainHtml, "utf8"), {
//    mode: 0,
//    quality: 11,
//    lgwin: 22,
// });
// const compressedBundleEntry = compress(Buffer.from(bundleEntry, "utf8"), {
//    mode: 0,
//    quality: 11,
//    lgwin: 22,
// });

// // Encode the compressed data to Base64
// const base64CompressedMainHtml = `export const compressedMainHtml=\`${Buffer.from(compressedMainHtml).toString("base64")}\``;
// const base64CompressedBundleEntry = `export const compressedBundleEntry=\`${Buffer.from(compressedBundleEntry).toString("base64")}\``;

// // Write the encoded data to TypeScript files
// writeFileSync("./scripts/compressedMainHtml.ts", base64CompressedMainHtml);
// writeFileSync("./scripts/compressedBundleEntry.ts", base64CompressedBundleEntry);

// console.log("Compressed and encoded files at", new Date().toLocaleString());


import { readFileSync, writeFileSync } from "fs";
import { compress } from "brotli";

let jsCode = readFileSync("./dist/_nuxt/entry.ea1d6c59.js", "utf8");

let htmlBuffer = Buffer.from(jsCode, "utf8");

let compressed = compress(htmlBuffer, {
   mode: 0,
   quality: 11,
   lgwin: 22,
});

let base64Compressed = `export const compressedGolemString=\`${Buffer.from(
   compressed
).toString("base64")}\``;

let compressedHtml = `export const compressedGolemContent=\`${readFileSync(
   "./dist/404.html",
   "utf8"
)}\``;

writeFileSync("../prompteditor/assets/compressedGolemContent.ts", compressedHtml);
writeFileSync("../prompteditor/assets/compressedGolem.ts", base64Compressed);

console.log("Built at", new Date().toLocaleString());
