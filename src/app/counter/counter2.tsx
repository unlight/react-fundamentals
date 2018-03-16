import * as React from 'react';

const states = new Map();

function State(): PropertyDecorator {
    return function(prototype: Object, propertyKey: string | symbol) {
        Object.defineProperty(prototype, propertyKey, {
            get() {
                const state = states.get(prototype.constructor);
                return state[propertyKey];
            },
            set(value) {
                let state = states.get(prototype.constructor);
                if (!state) {
                    state = Object.create(null);
                    state[propertyKey] = value;
                    states.set(prototype.constructor, state);
                } else {
                    state[propertyKey] = value;
                    this.setState(state);
                }
            }
        });
    };
}

function Component(): any {
    return function(target: FunctionConstructor) {
        return class extends target {

            constructor(props, context) {
                super(props, context);
                for (const key of Object.getOwnPropertyNames(target.prototype)) {
                    const val = this[key];
                    const methodList: string[] = methods.get(target) || [];
                    if (key !== 'constructor' && typeof val === 'function' && methodList.some(name => name === key)) {
                        this[key] = val.bind(this);
                    }
                }
                if (!states.get(target)) {
                    states.set(target, Object.create(null));
                }
            }

            get state() {
                return states.get(target);
            }

            set state(value) {
                // ?
            }
        };
    };
}

const methods = new Map();

function Method(): MethodDecorator {
    return function(prototype: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
        if (typeof descriptor.value === 'function') {
            const methodList: string[] = methods.get(prototype.constructor) || [];
            methodList.push(propertyKey as string);
            methods.set(prototype.constructor, methodList);
        }
    }
}

@Component()
export class Counter2 extends React.Component<{}, { count: number }> {

    @State() count: number = 0;

    constructor(props) {
        super(props);
    }

    @Method()
    onClick(e) {
        this.count = this.count + 1;
    }

    render() {
        return (
            <div>
                <strong>this.count: {this.count} </strong>
                <strong>this.state.count: {this.state.count} </strong>
                <button onClick={this.onClick}>Count Up!</button>
            </div>
        );
    }
}
