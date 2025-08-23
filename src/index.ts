#!/usr/bin/env node

import yargs, { Arguments } from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';

const run: any = async (): Promise<void> => {
  console.clear();
  try {
    await yargs(hideBin(process.argv))
            .version('JWT Debugger CLI 1.0.0')
            .help()
            .parse();
  } catch (error) {
    console.error(chalk.red.bold(`\n\r${error}`));
    process.exit(1);
  }
}

run();
