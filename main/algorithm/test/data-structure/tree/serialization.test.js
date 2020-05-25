const { binaryTreeLayerGenerator } = require("../../../src/data-structure/tree/definition");
const { serialize, deserialize } = require("../../../src/data-structure/tree/serialization");

describe("serialization", () => {
  test("serialize", () => {
    let t = binaryTreeLayerGenerator([]);
    expect(serialize(t)).toEqual("[]")
  });

  // test("deserialize", () => {
  //   let t = binaryTreeLayerGenerator([1,2,3,null,null,4,5]);
  //   let target = deserialize("[1,2,3,null,null,4,5]");
  //   expect(target).toEqual(t);
  // });

  test("both", () => {
    expect(deserialize(serialize(null))).toEqual(null);
  })
});