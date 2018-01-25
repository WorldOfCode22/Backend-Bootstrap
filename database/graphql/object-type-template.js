const{
    GraphQLNotNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLBoolean,
    GraphQLID,
} = require("graphql");

const Test = require("../mongoose-models/template");

module.exports = new GraphQLObjectType({
    name:"Test",
    fields:()=>({
        name:{type:GraphQLString}
    })
    })

