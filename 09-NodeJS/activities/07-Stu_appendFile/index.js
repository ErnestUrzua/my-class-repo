var fs = require("fs");

fs.readFile("data.csv", "utf8", function(error, data) {
    
    if (error) {
      return console.log(error);
    }
    console.log(data);
  
  });


  fs.appendFile('data.csv', 'message.txt', 'utf8', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  
  //or
  fs.appendFile("data.csv", process.argv[2], function(err) {
        if(error){

        }
  });
