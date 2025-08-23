import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import jwt from 'jsonwebtoken';

export const run: any = async (token?: string, secret?: jwt.Secret, publicKey?: jwt.PublicKey): Promise<void> => {
  try {
    if (!token) {
      token = await input({
        message: chalk.blue('JSON Web Token (JWT): '),
        required: true
      });
    }
    if (!secret && !publicKey) {
      const selection: 'secret' | 'publicKey' = await select({
        message: 'Secret or Public Key',
        choices: [
          {
            name: 'Secret',
            value: 'secret'
          },
          {
            name: 'Public Key',
            value: 'publicKey'
          }
        ]
      });
      if (selection === 'secret') {

      } else {

      }
    } else {

    }
  } catch (error) {
    console.error(chalk.red.bold(`\n\r${error}`));
    process.exit(1);
  }
};
