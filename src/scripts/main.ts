import { textSync } from "figlet";

export function main(args: string[]) {
    console.log(textSync('XGN', 'Chunky'));
    console.log(args);
}