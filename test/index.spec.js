"use strict"

import { expect } from 'chai';
import { add } from "../lib/index";

describe("#add", () => {
    it("first test", () => {
        expect(add(1, 2)).to.equal(3);
    });

    it("second test", () => {
        expect(add(1, 0)).to.equal(1);
    });
});
