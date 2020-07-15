const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should reverse the string",() => {
      let algoReverse = new Algo();
      expect(algoReverse.reverse("hello")).toEqual("olleh");
    })
  });

  describe("isPalindrome", () => {
   it("should find if it palindrome or not", () =>{
     let algoPalin = new Algo();
     expect(algoPalin.isPalindrome("racecar")).toEqual("racecar");
   })
  });

  describe("capitalize", () => {
    it("should take a string and capitilize the first letter of each word",() =>{
      let algoCap = new Algo();
      expect(algoCap.capitalize("hello world")).toEqual("Hello World");
    })
  });
});
