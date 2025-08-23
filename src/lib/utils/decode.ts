import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import jwt from 'jsonwebtoken';

export const run: any = async (token?: string): Promise<void> => {
  try {
    if (!token) {
      token = await input({
        message: chalk.blue('JSON Web Token (JWT): ')
      });
    }
  } catch (error) {
    console.error(chalk.red.bold(`\n\r${error}`));
    process.exit(1);
  }
};
