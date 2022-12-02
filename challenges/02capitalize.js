function capitalize(string) {
  const arrString = string.split(" ");

  for (var i = 0; i < arrString.length; i++) {
    arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);

  }
  return arrString.join(" ");
}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(capitalize('Hallo welt.'), 'Hallo Welt.');
    assert.equal(capitalize('Guten tag, welt.'), 'Guten Tag, Welt.');
    assert.equal(capitalize('Das ist eine überschrift'), 'Das Ist Eine Überschrift');
    assert.equal(capitalize('JavaScript macht Spaß!'), 'JavaScript Macht Spaß!');
  });
});
