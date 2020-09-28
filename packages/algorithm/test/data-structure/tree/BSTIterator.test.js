
const {
  binaryTreeLayerGenerator
} = require("../../../src/data-structure/tree/definition");
const {
  BSTIterator
} = require("../../../src/data-structure/tree/BSTIterator")

describe("BSTIterator", () => {
  test("with queue", () => {
    let t = binaryTreeLayerGenerator([7, 3, 15, null, null, 9, 20]);
    let it = new BSTIterator(t);
    expect(it.data).toEqual([3, 7, 9, 15, 20]);
    expect(it.next()).toEqual(3);
    expect(it.next()).toEqual(7);
    expect(it.hasNext()).toEqual(true);
    expect(it.next()).toEqual(9);
    expect(it.hasNext()).toEqual(true);
    expect(it.next()).toEqual(15);
    expect(it.hasNext()).toEqual(true);
    expect(it.next()).toEqual(20);
    expect(it.hasNext()).toEqual(false);
  });
});