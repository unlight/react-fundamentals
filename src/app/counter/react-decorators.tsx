const states = new Map();

export function State(): PropertyDecorator {
    return function(prototype: Object, propertyKey: string | symbol) {
        Object.defineProperty(prototype, propertyKey, {
            get() {
                const state = states.get(this);
                return state[propertyKey];
            },
            set(value) {
                let state = states.get(this);
                if (!state) {
                    state = Object.create(null);
                    state[propertyKey] = value;
                    states.set(this, state);
                } else {
                    state[propertyKey] = value;
                    this.setState(state);
                }
            }
        });
    };
}

export function Component(): any {
    return function(target: FunctionConstructor) {
        return class extends target {

            constructor(props, context) {
                super(props, context);
                for (const key of Object.getOwnPropertyNames(target.prototype)) {
                    const methodList: string[] = methods.get(target) || [];
                    if (key !== 'constructor' && methodList.some(name => name === key) && typeof this[key] === 'function') {
                        this[key] = this[key].bind(this);
                    }
                }
                if (!states.has(this)) {
                    states.set(this, Object.create(null));
                }
            }

            get state() {
                return states.get(this);
            }

            set state(value) {
                // ?
            }

        };
    };
}

const methods = new Map();

export function Method(): MethodDecorator {
    return function(prototype: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
        if (typeof descriptor.value === 'function') {
            const methodList: string[] = methods.get(prototype.constructor) || [];
            methodList.push(propertyKey as string);
            methods.set(prototype.constructor, methodList);
        }
    }
}

export function Ref(): PropertyDecorator {
    return function(prototype: Object, property: string) {
    }
}
