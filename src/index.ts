#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { run as decoder } from './lib/utils/decode.js';
import { run as encoder } from './lib/utils/encode.js';
import chalk from 'chalk';

const init: any = async (): Promise<void> => {
  console.clear();
  try {
    await yargs()
            .command('decode', 'JWT Decoder', decoder)
            .command('encode', 'JWT Encoder', encoder)
            .version('JWT Debugger CLI 1.0.0')
            .help()
            .parse(hideBin(process.argv));
  } catch (error) {
    console.error(chalk.red.bold(`\n\r${error}`));
    process.exit(1);
  }
}

init();
