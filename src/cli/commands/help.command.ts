import chalk from 'chalk';
import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
${chalk.bold('Программа для подготовки данных для REST API сервера.')}

${chalk.bold('Пример:')}
  ${'cli.js'} ${chalk.green('--<command>')} ${'[--arguments]'}

${chalk.bold('Команды:')}
  ${chalk.green('--version')}                    выводит номер версии
  ${chalk.green('--help')}                       печатает этот текст
  ${chalk.green('--import')} <path>              импортирует данные из TSV
  ${chalk.green('--generate')} <n> <path> <url>  генерирует произвольное количество тестовых данных
`);
  }
}
