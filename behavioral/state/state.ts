export abstract class State {
    constructor(protected context: Context) { }

    abstract method1();
    abstract method2();
}

export class ConcreteState1 extends State {
    method1() {
        console.log('ConcreteState1->method1: change state');
        this.context.setState(new ConcreteState2(this.context));
    }
    method2() {
        console.log('Empty ConcreteState1->method2...');
    }
}

export class ConcreteState2 extends State {
    method1() {
        console.log('Empty ConcreteState2->method1...');
    }
    method2() {
        console.log('ConcreteState2->method2: change state');
        this.context.setState(new ConcreteState1(this.context));
    }
}

// Context
export class Context {
    private state: State;
    constructor() {
        this.setState(new ConcreteState1(this));
    }

    setState(state: State) {
        this.state = state;
    }

    method1() {
        this.state.method1();
    }
    method2() {
        this.state.method2();
    }
}
