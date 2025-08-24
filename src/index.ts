#!/usr/bin/env node

import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { select } from '@inquirer/prompts';
import { run as decoder } from './lib/utils/decode.js';
import { run as encoder } from './lib/utils/encode.js';

/**
 *
 */
const init: any = async (): Promise<void> => {
  console.clear();
  try {
    await yargs(hideBin(process.argv))
            .command(
              'decode',
              'JWT Decoder',
              () => {},
              async (argv) => {
                // TODO: @fedtti - Check for possible conflicts between arguments.
                decoder(argv.token, argv.secret, argv.encoding, argv.publicKey);
              }
            )
            .command(
              'encode',
              'JWT Encoder',
              encoder
            )
            .command(
              '$0',
              'JWT Debugger',
              () => {},
              async () => {
                const command = await select({
                  message: 'JSON Web Token (JWT) Debugger',
                  choices: [
                    {
                      name: 'JWT Decoder',
                      value: 'decoder'
                    },
                    {
                      name: 'JWT Encoder',
                      value: 'encoder'
                    }
                  ]
                });
                if (command === 'decoder') {
                  decoder();
                } else {
                  encoder();
                }
              }
            )
            .version(`JWT Debugger CLI ${process.env.npm_package_version}`)
            .help()
            .parse();
  } catch (error) {
    console.error(chalk.red.bold(`\n\r${error}`));
    process.exit(1);
  }
}

init(); //
