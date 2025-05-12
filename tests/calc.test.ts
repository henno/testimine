import { describe, expect, it } from "bun:test";
import { add, subtract } from "../src/calc"; // funktsiooni veel ei eksisteeri

describe("add", () => {
  it("liidab kaks arvu", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("liidab kaks murdarvu", () => {
    expect(add("1/2", "1/2")).toBe(1)
  });
  it("liidab kaks murdarvu nii, et vastus oleks ka murdarv", () => {
  	expect(add("1/3", "1/3")).toBe("2/3")
  });
  it("viskab vea, kui sisend sisaldab objekti", ()=> {
  	expect(() => add({},2)).toThrow("Vigane sisend");
  })
});

describe("subtract", () => {
  it("lahutab teise arvu esimesest", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it("lahutab kaks murdarvu", () => {
    expect(subtract("1", "1/2")).toBe("1/2");
  });

  it("lahutab kaks murdarvu nii, et vastus oleks ka murdarv", () => {
    expect(subtract("2/3", "1/3")).toBe("1/3");
  });

  it("lahutab murdarvu nullist", () => {
    expect(subtract(0, "1/4")).toBe("-1/4");
  });

  it("viskab vea, kui sisend sisaldab objekti", () => {
    expect(() => subtract({}, 2)).toThrow("Vigane sisend");
  });
});
