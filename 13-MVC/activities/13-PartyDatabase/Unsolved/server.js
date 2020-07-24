var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
orm.selectAndOrder("party_name", "parties", "id");

// // Find all the buyers ordering by the lowest ID to the highest ID.
orm.selectAndOrder("client_name", "clients", "id");

// // Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere(["parties","clients"], "party_type", "grown-up");

// // Find a pet in the pets table by an animal_name of Marco.
// orm.selectWhere("pets", "animal_name", "Marco");

// //Find a pet in the pets table by an animal_breed of hawk.
// orm.selectWhere("pets", "animal_breed", "hawk");


// //Find a buyer in the buyers table by an buyer_name of Kevon.
// orm.selectWhere("buyers", "buyer_name", "Kevon");


// //Find a buyer in the buyers table by an buyer_name of Jane.
// orm.selectWhere("buyers", "buyer_name", "Jane");


// // Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
