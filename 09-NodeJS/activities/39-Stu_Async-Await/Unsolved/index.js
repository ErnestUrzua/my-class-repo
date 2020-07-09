const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const { movie } = await readFileAsync({
      
    });

    const { data } = await axios.get(
      
    );

    console.log(data);

  } catch(err) {
    console.log(err);
  }
}

combineAnimals();
