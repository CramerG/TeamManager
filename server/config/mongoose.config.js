const  mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/TeamManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Database Connection Established"))
    .catch( err => console.log("Error Connection to Database: ", err));