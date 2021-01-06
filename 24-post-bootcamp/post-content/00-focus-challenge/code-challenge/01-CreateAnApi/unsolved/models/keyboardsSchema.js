const mongood = require("mongoose");
const Schema = mongoose.Schema;

const keyboardsSchema = new Schema({
    //TODO

})

const Keyboards = mongoose.model("Keyboards",keyboardsSchema);

module.exports(Keyboards);