import { InsensitiveMap } from "../index";
import { expect } from 'chai';
import 'mocha';

describe("Insensitive case map", () => {
    let imap = new InsensitiveMap({});
    imap.set("Foo", "bar");

    it("key Foo should return bar", () => {
        expect(imap.get("foo")).to.equal("bar");
    })

    it("key foo should return bar", () => {
        expect(imap.get("FOO")).to.equal("bar");
    })

})
