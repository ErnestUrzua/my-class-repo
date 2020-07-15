const Child = require("../child");

describe("Child", () => {
    it("should test if child name is string", () => {
        const testVal = "";
        const newChild = () => new Child(testVal, 10);
        const err = new Error(
            "Expected parameter 'name' to be a non-empty string"
        );
        
        // Assert
        expect(newChild).toThrowError(err);

    })
});
