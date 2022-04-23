import { Command, createOption } from 'commander';

import { version, description } from '../package.json'
import { runServer } from './server'
import { runBuild } from './build'
import { init } from './utils/init'
import type { CommanderStartOptions } from './types'
import { WebpackMode } from './types'

const DEFAULT_PORT = 4242

const program = new Command();

const configOption = createOption('--config <string>', 'Path to config file')
const modeOption = createOption('--mode <string>', 'Mode for run app')
const portOption = createOption('--port <type>', 'Port for dev server')
const initOption = createOption('-y ', 'Init with default configuration')

const parseOptions = ({
    config,
    mode,
    port
}: Record<string, string | undefined>
): Required<CommanderStartOptions> => ({
    configPath: config,
    mode: mode === WebpackMode.Development || mode === WebpackMode.Production
        ? mode
        : WebpackMode.Development,
    port: Number(port) || DEFAULT_PORT
})

program
    .name('🌈 Storybook 21 🌈')
    .description(description)
    .version(version);

program
    .command('init')
    .description('initialize storybook in your app 📦')
    .addOption(initOption)
    .action(({ y }: { y: boolean }) => {
        init(y)
    })

program
    .command('start')
    .description('run app in dev mode 🚀')
    .addOption(configOption)
    .addOption(modeOption)
    .addOption(portOption)
    .action((str: Record<string, string | undefined>) => {
        const options = parseOptions(str)
        runServer(options)
    })

program
    .command('build')
    .description('build app 🛠️')
    .addOption(modeOption)
    .addOption(configOption)
    .action((str: Record<string, string | undefined>) => {
        const options = parseOptions(str)
        runBuild(options)
    })

program.showHelpAfterError('(Try --help for show information)');

export { program }
