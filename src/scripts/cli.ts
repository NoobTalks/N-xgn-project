import arg from 'arg';
import inquirer, { DistinctQuestion } from 'inquirer';

import { Answers, Options } from '../typings';
import { ARGUMENTS, ALIAS } from '../utils/constants';

function parseArgumentsIntoOptions(rawArgs: string[]): Options{
    const args= arg({
        [ARGUMENTS.GIT]     : Boolean,
        [ARGUMENTS.YES]     : Boolean,
        [ARGUMENTS.INSTALL] : Boolean,
        [ALIAS.GIT]: ARGUMENTS.GIT,
        [ALIAS.YES]: ARGUMENTS.YES,
        [ALIAS.INSTALL]: ARGUMENTS.INSTALL
    },{argv:rawArgs.slice(2)
    }
    );
    return {
        git :  args[ARGUMENTS.GIT] !! ,
        skipPrompts : args[ARGUMENTS.YES] !!,
        runInstall : args[ARGUMENTS.INSTALL] !!,
        template: args._[0],
        targetDir: process.cwd()
    };
}

async function promptForMissingOptions(options: Options): Promise<Options>{
    const questions: DistinctQuestion[] = [];
    const answers = await inquirer.prompt<Answers>(questions);
    return {
        ...options
    };
}

export async function cli(args: string[]){
    const options = parseArgumentsIntoOptions(args);
}
