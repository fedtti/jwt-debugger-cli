import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import { readFileSync } from 'fs';
import jwt from 'jsonwebtoken';

export const run: any = async (token?: string, secret?: jwt.Secret, encoding?: 'utf8' | 'base64', publicKey?: jwt.PublicKey): Promise<void> => {
  try {
    if (!token) {
      token = await input({
        message: chalk.blue('JSON Web Token (JWT): '),
        required: true
      });
    }
    let secretOrPublicKey: jwt.Secret | jwt.PublicKey;
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
        secret = await input({
          message: chalk.blue('Secret: '),
          required: true
        });
        encoding = await select({
          message: 'Encoding Format',
          choices: [
            {
              name: 'UTF-8',
              value: 'utf8'
            },
            {
              name: 'Base64',
              value: 'base64'
            }
          ]
        });
        secretOrPublicKey = encoding === 'base64' ? Buffer.from(secret, 'base64') as jwt.Secret : secret as jwt.Secret;
      } else {
        const publicKeyFile: string = await input({
          message: chalk.blue('Public Key: '),
          required: true
        });
        publicKey = readFileSync(publicKeyFile, 'utf-8');
        secretOrPublicKey = publicKey as jwt.PublicKey;
      }
    } else {
      secretOrPublicKey = !!secret ? secret as jwt.Secret : publicKey as jwt.PublicKey; // TODO: @fedtti - Check if it works with Base64 encoded secrets.
    }
    console.info(chalk.green.bold(`\n\r${JSON.stringify(jwt.verify(token, secretOrPublicKey))}`));
  } catch (error) {
    console.error(chalk.red.bold(`\n\r${error}`));
    process.exit(1);
  }
};
