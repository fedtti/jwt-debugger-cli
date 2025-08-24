import chalk from 'chalk';

export const run: any = async (): Promise<void> => {
  try {

  } catch (error) {
    console.error(chalk.red.bold(`\n\r${error}`));
    process.exit(1);
  }
};
