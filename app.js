const express = require("express");
const app = express();
const port = 3000;
const keys = require("./config/keys");
const graphQL = require("express-graphql");
const gqlSchema = require("./database/graphql/root-query");
const mongoose = require('mongoose');

mongoose.connect(keys.database.URI,(err)=>{
    if(err){
        console.log("Database Connection Error: " + err);
    }else{
        console.log("Datbase Connected");
    }
})

app.use("/graphql",graphQL({
   graphiql: true,
   schema: gqlSchema
}));

app.listen(port,()=>{
    console.log("App runing on port: " + port);
})