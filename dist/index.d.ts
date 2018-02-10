export interface IMap<T> {
    [key: string]: T;
}
export declare class AnyMap implements IMap<any> {
    [key: string]: any;
}
export declare class InsensitiveMap {
    private items;
    constructor(items?: AnyMap);
    private toLowerCase(s);
    get(key: string): any;
    set(key: string, value: any): void;
}
