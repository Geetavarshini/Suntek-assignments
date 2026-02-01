1.generate pacage.json
   nmp init -y

2.create server.js

3.install,import "express" and create HTTP server. assign port

###Connect MongoDB database
RESTAPI-> momdodb native driver -> mongo server(we are not using this)
RESTAPI-> mongodb [orm tool object reltion mapper] here we are using(mongodb odm)->mongodb server 
a. Insall mangoose and connect to mongodb server
b.create schema of the resourse 
c. create model of the schema 
d. perform  DB operatiions on the model

### CREATE PRODUCT API
   Product obj schema: {pid,productName,price}

   1.POST /products
   2.GET /products
   3.GET /products/<objectId>
   4.PUT /product/<objectId>