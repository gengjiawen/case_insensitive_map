"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const chai_1 = require("chai");
require("mocha");
describe("Insensitive case map", () => {
    let imap = new index_1.InsensitiveMap({});
    imap.set("Foo", "bar");
    it("key Foo should return bar", () => {
        chai_1.expect(imap.get("foo")).to.equal("bar");
    });
    it("key foo should return bar", () => {
        chai_1.expect(imap.get("FOO")).to.equal("bar");
    });
});
