#!/usr/bin/env node

import { $, argv } from "zx";
import * as url from "url";

$.verbose = true;

const commonFlags = "--rootDir src";

const build = {
  esm: `tsc ${commonFlags} --module esnext --outDir dist/esm --declaration true --declarationMap true --declarationDir dist/types`,
  cjs: `tsc ${commonFlags} --module commonjs --outDir dist/cjs`,
};

const command = argv._.length === 1 ? argv._[0] : null;

process.env.PATH = `${process.env.PATH}:${url.fileURLToPath(
  new URL(".", import.meta.url)
)}/node_modules/.bin`;

if (command === "build") {
  await $`rimraf dist && cross-env NODE_ENV=production concurrently ${build.esm} ${build.cjs}`;
}

if (command === "lint") {
  await $`eslint src --ext .ts,.tsx,.js`;
}
