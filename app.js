const express= require('express');
const {graphqlHTTP}=require('express-graphql');
var  bodyParser =require('body-parser');
var graphqlExpress  = require( 'apollo-server-express');
const DataLoader = require('dataloader');
const schema=require('./schema/schema');
const app=express();

//https://github.com/prameshbhattarai/express-js-type-orm-postgres

app.use('/graphql',graphqlHTTP({
schema,
graphiql:true

}));

app.listen(4000,()=>{
  console.log('now listening for requests on port 4000');
});
