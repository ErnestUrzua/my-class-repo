// Query 1 - Creating dbs, inserting data and finding data
// Start up a new database by switching to it.
// NOTE: The db does not exist until you create a collection:

db 
use classroomdb


// Show the current db by running db:

db.students({"name":"ernie","rowNumber": "1", "OS": "windows", "hobbies": "fitness"})

db.students({"name":"Sam","rowNumber": "4", "OS": "linux", "hobbies": "eating"})

db.students({"name":"anon","rowNumber": "1", "OS": "mac", "hobbies": "music"})

db.students.find ({"rowNumber": "1"})
db.students.find ({"name": "ernie"})
db.students.find ({"OS": "mac", "rowNumber": "1"})


