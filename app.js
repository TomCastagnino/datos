var express = require("express"),
    app     = express();
    

var homeRoutes = require("./routes/home");
    
    
    
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(homeRoutes);

////////////////////////////////////////////////////
//TELL EXPRESS TO LISTEN FOR REQUESTS (START SERVER)
////////////////////////////////////////////////////

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});
