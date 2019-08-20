// standard implementation
export class Printer {
    public print(text: string): void {
        console.log(text);
    }
}

// useful class with different interface
export class HTMLPrinter {
    public printParagraph(array: Buffer): void {
        const text = this.convertToString(array);
        console.log(`<p>${text}</p>`);
    }
    private convertToString(array: Buffer) {
        return array.toString();
    }
}

export class PrinterAdapter extends Printer {
    constructor(private readonly htmlPrinter: HTMLPrinter) {
        super();
    }
    public print(text: string): void {
        this.htmlPrinter.printParagraph(Buffer.from(text));
    }
}


