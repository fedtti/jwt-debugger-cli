import chalk from 'chalk';
import jwt from 'jsonwebtoken';

export const run: any = async (header?: jwt.JwtHeader, payload?: jwt.JwtPayload, secret?: jwt.Secret, encoding?: 'utf8' | 'base64', privateKey?: jwt.PrivateKey): Promise<void> => {
  try {

  } catch (error) {
    console.error(chalk.red.bold(`\n\r${error}`));
    process.exit(1);
  }
};
