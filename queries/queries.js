const rm=require( 'ramda');


module.exports = (pool) => ({


  GetClosestX(lat,long,closest) {

    let x=`Select * from TestGIS tg ORDER BY ST_Distance(tg.geog,\'SRID=4326;POINT(${lat} ${long})\')  ASC LIMIT ${closest};`

    return pool.query(x).then(results=>results.rows)



},
GetAllLocations(){
  return pool.query('Select * from TestGIS;').then(result=>result.rows)
},





});
