const {
    GraphQLNotNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLID,
    GraphQLSchema
} = require("graphql");

const TestType = require("./object-type-template");
const Test = require("../mongoose-models/template");

const RootQuery = new GraphQLObjectType({
   name:"RootQuery",
   fields:{
       test:{
           type:TestType,
           args:{
               id:{type:GraphQLString}
           },
           resolve(parentVal,args){
               return Test.findById(args.id).then((doc)=>{
                   return doc
               })
           }
       }
   }
});

module.exports = new GraphQLSchema({
   query:RootQuery 
});