import { Printer } from "./adapter";
import { HTMLPrinter } from "./adapter";
import { PrinterAdapter } from "./adapter";

const printer1: Printer = new Printer();

const htmlPrinter = new HTMLPrinter();
const printer2: Printer = new PrinterAdapter(htmlPrinter);

function clientCode(printer: Printer, text: string) {
    printer.print(text)
}

const message = 'Hello world!';
clientCode(printer1, message);
clientCode(printer2, message);
