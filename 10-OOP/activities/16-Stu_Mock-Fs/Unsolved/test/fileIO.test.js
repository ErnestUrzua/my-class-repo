const FileIO = require("../fileIO");
const fs = require("fs");
//const { fileURLToPath } = require("url");

jest.mock("fs");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // Your code here
      const newFile = new FileIO();
      const readFrom = newFile.read("message.txt");

      fs.readFileSync.mockReturnValue(`Hello World! 
      Goodbye World!`
      )
      expect(readFrom).toEqual(`Hello World! 
      Goodbye World!`)

    });


  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // Your code here
    });
  });
});
