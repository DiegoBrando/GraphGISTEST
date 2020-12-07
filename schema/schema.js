const graphql=require('graphql');
const _=require('lodash');
const Pool = require('pg').Pool
const cors = require('cors')
const pg = require('pg')
const db = require('../queries/queries.js');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'GISTest',
  password: 'password',
  port: 5433,
})
//https://gist.github.com/JoeKarlsson/ca1d2f3e95fa2412feb418aedfbf9844

const {GraphQLObjectType,GraphQLString,GraphQLSchema,GraphQLID,GraphQLInt,GraphQLList,GraphQLFloat}=graphql;



const UserType=new GraphQLObjectType({
  name:'User',
  fields:()=>({
    userid:{type:GraphQLID},
    username:{type:GraphQLString},
    profilepicture:{type:GraphQLString}
  })
});






const LocationType=new GraphQLObjectType({
  name:'Location',
  fields:()=>({
    locationid:{type:GraphQLInt},
    locationname:{type:GraphQLString},
    locationlong:{type:GraphQLFloat},
    logcationlat:{type:GraphQLFloat},
    geog:{type:GraphQLString}

})
});







const RootQuery= new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
    locations:{
      type:new GraphQLList(LocationType),
      resolve(parent,args){
        return db(pool).GetAllLocations()
    }
  },
  closest:{
    type: new GraphQLList(LocationType),
    args:{lat:{type:GraphQLFloat},log:{type:GraphQLFloat},number:{type:GraphQLInt}},
    resolve(parent,args){
      return db(pool).GetClosestX(args.lat,args.log,args.number)
    }
  }


}


});



module.exports=new GraphQLSchema({
  query:RootQuery
});
