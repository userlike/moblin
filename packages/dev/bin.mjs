#!/usr/bin/env node

import { $ as $$, argv, ProcessOutput, useBash } from "zx";
import * as url from "node:url";

import { spawn } from "node:child_process";

// console.log(process.env.PATH);

// const child = spawn("bash", ["-c", "echo $PATH"], {
//   env: { ...process.env }, // Pass the current environment
// });

// child.stdout.on("data", (data) => {
//   console.log(`PATH in child process: ${data}`);
// });

// child.stderr.on("data", (data) => {
//   console.error(`Error: ${data}`);
// });

// child.on("close", (code) => {
//   console.log(`Child process exited with code ${code}`);
// });

const binPath = getBinPath();

// console.log(`Using bin path: ${binPath}`);

// process.env.PATH = `${process.env.PATH}:${binPath}:/anil`;

// console.log(`PATH: ${process.env.PATH}`);

const $ = $$({
  verbose: true,
  preferLocal: getBinPath(),
  shell: getCustomBashPath(),
  // env: process.env,
});

const commonFlags = "--rootDir src";

const build = {
  esm: `tsc ${commonFlags} --outDir dist/esm --declaration true --declarationMap true`,
  cjs: `tsc ${commonFlags} --outDir dist/cjs --declaration true --declarationMap true --module commonjs --moduleResolution node10`,
};

const command = argv._.length === 1 ? argv._[0] : null;

try {
  if (command === "build") {
    await $`rimraf dist && cross-env NODE_ENV=production concurrently ${build.esm} ${build.cjs}`;
  }

  if (command === "lint") {
    await $`eslint -c eslint.config.ts src/**/*`;
  }
} catch (error) {
  if (error instanceof ProcessOutput) {
    // console.error(error.stderr);
    process.exit(error.exitCode);
  } else {
    console.error("Unexpected error:", error);
    process.exit(1);
  }
}

function getBinPath() {
  return `${url.fileURLToPath(new URL(".", import.meta.url))}node_modules/.bin`;
}

function getCustomBashPath() {
  return url.fileURLToPath(new URL("./bash.sh", import.meta.url));
}
