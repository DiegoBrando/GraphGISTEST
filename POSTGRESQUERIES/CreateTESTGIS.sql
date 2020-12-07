CREATE TABLE IF NOT EXISTS  TestGIS (
	locationID serial PRIMARY KEY,
	locationname VARCHAR ( 255 ),
	locationlong decimal not NULL,
	locationlat decimal not NULL,
	geog geography(POINT)
	
	
);

