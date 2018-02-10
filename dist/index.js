"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnyMap {
}
exports.AnyMap = AnyMap;
class StringMap {
}
class InsensitiveMap {
    constructor(items = {}) {
        this.items = items;
    }
    toLowerCase(s) { return s.toLowerCase(); }
    get(key) {
        return this.items[this.toLowerCase(key)];
    }
    set(key, value) {
        this.items[this.toLowerCase(key)] = value;
    }
}
exports.InsensitiveMap = InsensitiveMap;
