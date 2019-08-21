export class HTMLFacade {
    private readonly stringConverter: StringConverter;
    private readonly stringPrettier: StringPrettier;
    private readonly printer: Printer;

    constructor() {
        this.stringConverter = new StringConverter();
        this.stringPrettier = new StringPrettier();
        this.printer = new Printer();
    }

    print(text: string, tag: string): void {
        const capitalizedText = this.stringPrettier.toUpper(text);
        const htmlFormatter = new HTMLFormatter(tag);
        const formattedText = htmlFormatter.format(this.stringConverter.toBuffer(capitalizedText));
        this.printer.print(this.stringConverter.toString(formattedText));
    }
}

class StringConverter {
    toBuffer(str: string): Buffer {
        return Buffer.from(str);
    }

    toString(buff: Buffer): string {
        return buff.toString();
    }
}

class StringPrettier {
    toUpper(str: string): string {
        return str.toUpperCase();
    }

    toLower(str: string): string {
        return str.toLowerCase();
    }
}

class HTMLFormatter {
    constructor(private readonly tag: string) { }
    format(buf: Buffer): Buffer {
        return Buffer.from(`<${this.tag}>${buf.toString()}</${this.tag}>`);
    }
}

class Printer {
    print(str: string) {
        console.log(str);
    }
}
