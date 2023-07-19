import chalk from 'chalk';
import figlet from 'figlet';
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Xola'));

console.log(styledMessage)

console.log(
	figlet.textSync("Xola", {
		font: "Isometric3",
		horizontalLayout: "default",
		verticalLayout: "default",
		width: 80,
		whitespaceBreak: true,
	})
);