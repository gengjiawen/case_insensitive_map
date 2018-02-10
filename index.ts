export interface IMap<T> {
    [key: string]: T;
}

export class AnyMap implements IMap<any> {
    [key: string]: any;
}

class StringMap implements IMap<string> {
    [key: string]: string;
}

export class InsensitiveMap {
    constructor(private items = {} as AnyMap) { }
    private toLowerCase(s: string) { return s.toLowerCase(); }
    get(key: string) {
        return this.items[this.toLowerCase(key)];
    }
    set(key: string, value: any): void {
        this.items[this.toLowerCase(key)] = value;
    }
}
