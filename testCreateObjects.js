'use strict';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var supertest = require('supertest-as-promised');
var request = supertest('https://dev.openi-ict.eu');
var assert = require('chai').assert;

//-----TYPES API-----


var sub_type_type = {
   "@reference": "Test Type Variations Sub Object",
   "@context": [
      {
         "@property_name": "name",
         "@openi_type": "string",
         "@multiple": false,
         "@required": true,
         "@context_id": "Forename Name"
      },
      {
         "@property_name": "age",
         "@openi_type": "int",
         "@multiple": false,
         "@required": false,
         "@context_id": "Age"
      },
      {
         "@property_name": "fav_nums",
         "@openi_type": "int",
         "@multiple": true,
         "@required": false,
         "@context_id": "Favourite Numbers"
      }
   ]
}

var small_obj_type = {
   "@reference": "Test Type Variations Small",
   "@context": [
      {
         "@property_name": "name",
         "@openi_type": "string",
         "@multiple": false,
         "@required": true,
         "@context_id": "Name of Car"
      },
      {
         "@property_name": "sub_obj",
         "@openi_type": "t_a925059afb243222a81f0b8556a4d3ec-395",
         "@multiple": false,
         "@required": true,
         "@context_id": "Sub Object"
      }
   ]
}

var  large_obj_type = {
   "@reference": "Test Type Variations Large",
   "@context": [
      {
         "@property_name": "boolean",
         "@openi_type": "boolean",
         "@multiple": false,
         "@required": true,
         "@context_id": "boolean"
      },
      {
         "@property_name": "int",
         "@openi_type": "int",
         "@multiple": false,
         "@required": true,
         "@context_id": "int"
      },
      {
         "@property_name": "string",
         "@openi_type": "string",
         "@multiple": false,
         "@required": true,
         "@context_id": "string"
      },
      {
         "@property_name": "float",
         "@openi_type": "float",
         "@multiple": false,
         "@required": true,
         "@context_id": "float"
      },
      {
         "@property_name": "url",
         "@openi_type": "url",
         "@multiple": false,
         "@required": true,
         "@context_id": "url"
      },
      {
         "@property_name": "date",
         "@openi_type": "date",
         "@multiple": false,
         "@required": true,
         "@context_id": "date"
      },
      {
         "@property_name": "timestamp",
         "@openi_type": "timestamp",
         "@multiple": false,
         "@required": true,
         "@context_id": "timestamp"
      },
      {
         "@property_name": "gps",
         "@openi_type": "gps",
         "@multiple": false,
         "@required": true,
         "@context_id": "gps"
      },
      {
         "@property_name": "hex",
         "@openi_type": "hexadecimal",
         "@multiple": false,
         "@required": true,
         "@context_id": "hex"
      },
      {
         "@property_name": "base64",
         "@openi_type": "base64",
         "@multiple": false,
         "@required": true,
         "@context_id": "base64"
      }
   ]
}

var sub_type_type_id  = "t_a925059afb243222a81f0b8556a4d3ec-395"
var small_obj_type_id = "t_57c4c87aa3e5dba326900fe95bf10e71-314"
var large_obj_type_id = "t_0431b53ea566827d5b8bad8fdfd12c13-1121"

var sub_obj_1 = {
   "@openi_type": "t_a925059afb243222a81f0b8556a4d3ec-395",
   "@data": {
      "name"     : "sub_obj_1",
      "age"      : 300,
      "fav_nums" : [10, 44, 342]
   }
}


var sub_obj_2 = {
   "@openi_type": "t_a925059afb243222a81f0b8556a4d3ec-395",
   "@data": {
      "name"     : "sub_obj_2",
      "fav_nums" : [103, 4, 23]
   }
}


var small_obj_1 = {
   "@openi_type": "t_57c4c87aa3e5dba326900fe95bf10e71-314",
   "@data": {
      "name"     : "small obj 1",
      "sub_obj"  : "replace with real object Id before creating object"
   }
}

var small_obj_2 = {
   "@openi_type": "t_57c4c87aa3e5dba326900fe95bf10e71-314",
   "@data": {
      "name"     : "small obj 1",
      "sub_obj"  : {
         "name"     : "sub_obj_literal"
      }
   }
}

var large_obj = {
   "@openi_type": "t_0431b53ea566827d5b8bad8fdfd12c13-1121",
   "@data": {
      "boolean"   : true,
      "int"       : 1,
      "string"    : "mock string",
      "float"     : 3452.234,
      "url"       : "https://dev.openi-ict.eu/admin/",
      "date"      : "20-03-1990",
      "timestamp" : "2014-04-20 10:32:55.339",
      "gps"       : "52.29504228453735,-7.895050048828125",
      "hex"       : "345AF345",
      "base64"    : "dGVzdCB0ZXN0IHRlc3Q="
   }
}


var permissions_manifest = [
   {
      "ref"         : "t_a925059afb243222a81f0b8556a4d3ec-395",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "CREATE"
   },
   {
      "ref"         : "t_a925059afb243222a81f0b8556a4d3ec-395",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "READ"
   },
   {
      "ref"         : "t_a925059afb243222a81f0b8556a4d3ec-395",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "UPDATE"
   },
   {
      "ref"         : "t_a925059afb243222a81f0b8556a4d3ec-395",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "DELETE"
   },
   {
      "ref"         : "t_57c4c87aa3e5dba326900fe95bf10e71-314",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "CREATE"
   },
   {
      "ref"         : "t_57c4c87aa3e5dba326900fe95bf10e71-314",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "READ"
   },
   {
      "ref"         : "t_57c4c87aa3e5dba326900fe95bf10e71-314",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "UPDATE"
   },
   {
      "ref"         : "t_57c4c87aa3e5dba326900fe95bf10e71-314",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "DELETE"
   },
   {
      "ref"         : "t_0431b53ea566827d5b8bad8fdfd12c13-1121",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "CREATE"
   },
   {
      "ref"         : "t_0431b53ea566827d5b8bad8fdfd12c13-1121",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "READ"
   },
   {
      "ref"         : "t_0431b53ea566827d5b8bad8fdfd12c13-1121",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "UPDATE"
   },
   {
      "ref"         : "t_0431b53ea566827d5b8bad8fdfd12c13-1121",
      "type"        : "type",
      "access_level": "APP",
      "access_type" : "DELETE"
   }
]


//create types
//get Types

//create sub object
//get sub object
//create small with reference
//get small

//create small with literal
//create small with litteral (minus optional)


var dev_user = {
   "username": "platformTestDev",
   "password": "platformTestDev"
};

var user = {
   "username": "platformTest",
   "password": "platformTest"
};

var client = {
   "name"       : "Create Object Test Client",
   "description": "Client used for testing of the platform"
};

var app_developer_session = "";
var auth_token            = "";

describe('Types API', function () {
   describe('Creating Types', function () {
      it('should create sub Type', function () {
         this.timeout(10000);
         return request.post('/api/v1/types')
            .send(sub_type_type)
            .set('Accept', 'application/json')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               if ( body["error"] !== undefined && body["error"].indexOf("Type already exists") > 0 ) {
                  assert(response.status == 409, 'Message should be "Type already exists" on 409 status')
               }
               else {
                  assert(body["@id"] !== undefined, 'Type ID should be returned');
               }
            });
      }),
      it('should create small Object Type', function () {
         this.timeout(10000);
         return request.post('/api/v1/types')
            .send(small_obj_type)
            .set('Accept', 'application/json')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               if ( body["error"] !== undefined && body["error"].indexOf("Type already exists") > 0 ) {
                  assert(response.status == 409, 'Message should be "Type already exists" on 409 status')
               }
               else {
                  assert(body["@id"] !== undefined, 'Type ID should be returned');
               }
            });
      }),
      it('should large Object Type', function () {
         this.timeout(10000);
         return request.post('/api/v1/types')
            .send(large_obj_type)
            .set('Accept', 'application/json')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               if ( body["error"] !== undefined && body["error"].indexOf("Type already exists") > 0 ) {
                  assert(response.status == 409, 'Message should be "Type already exists" on 409 status')
               }
               else {
                  assert(body["@id"] !== undefined, 'Type ID should be returned');
               }
            });
      })
   });
   describe('Getting Type', function () {
      it('should retrieve sub_type type', function () {
         this.timeout(10000);
         return request.get('/api/v1/types/' + sub_type_type_id)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert(body["@reference"] === sub_type_type["@reference"], "Body should contain correct Type reference");
            })
            .expect(200);
      }),
         it('should retrieve small obj type', function () {
         this.timeout(10000);
         return request.get('/api/v1/types/' + small_obj_type_id)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert(body["@reference"] === small_obj_type["@reference"], "Body should contain correct Type reference");
            })
            .expect(200);
      }),
         it('should retrieve large object type', function () {
            this.timeout(10000);
            return request.get('/api/v1/types/' + large_obj_type_id)
               .expect('content-type', 'application/json; charset=utf-8')
               .expect(function (response) {
                  var body = JSON.parse(response.text);
                  assert(body["@reference"] === large_obj_type["@reference"], "Body should contain correct Type reference");
               })
               .expect(200);
      })
   });
});


describe('Setup App developer and user', function () {
   describe('Users', function () {

      it('should create a user', function () {
         this.timeout(10000);
         return request.post('/api/v1/auth/users')
            .send(user)
            .set('Accept', 'application/json')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               if ( body["error"] !== undefined && body["error"].indexOf("exists") > 0 ) {
                  assert(response.status == 409, 'Error 409 Should be returned if user already exists')
               }
               else {
                  assert(response.status == 201, 'Status should be "201".');
               }
            });
      });
      it('should create a developer user', function () {
         this.timeout(10000);
         return request.post('/api/v1/auth/users')
            .send(dev_user)
            .set('Accept', 'application/json')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               if ( body["error"] !== undefined && body["error"].indexOf("exists") > 0 ) {
                  assert(response.status == 409, 'Error 409 Should be returned if user already exists')
               }
               else {
                  assert(response.status == 201, 'Status should be "201".');
               }
            });
      });
   });
   describe('Get app developer Session', function () {

      it('should create user session', function () {
         this.timeout(10000);
         return request.post('/api/v1/auth/sessions')
            .send(dev_user)
            .set('Accept', 'application/json')
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert(body["session"] !== undefined, 'User session should be returned');
               app_developer_session = body["session"];
            });
      });
   });
   describe('Create Test Client/App', function () {
      it('should create client on platform using user details', function () {
         this.timeout(10000);
         return request.post('/api/v1/auth/clients')
            .send(client)
            .set('Accept', 'application/json')
            .set('Authorization', app_developer_session)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert(body["cloudlet"] !== undefined, 'Cloudlet should be returned with client details');
               assert(body["api_key"] !== undefined, '"api_key" should be returned with client details');
               assert(body["secret"] !== undefined, '"secret" should be returned with client details');
               client = body
            });
      });
   });
   describe('Retrieve auth token for user and client/app', function () {
      it('should authorize client to access data on behalf of user', function () {
         this.timeout(10000);
         return request.post('/api/v1/auth/authorizations')
            .send({
               username: user.username,
               password: user.password,
               api_key : client.api_key,
               secret  : client.secret
            })
            .set('Accept', 'application/json')
            //.expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert(body["session"] !== undefined, 'Authorization session should be returned');
               auth_token = body["session"];
            });
      });
   });
});


//-----Permissions API-----

describe('Permissions API', function () {
   describe('Creating Permissions', function () {

      it('should create GenericEntry permissions for client', function () {
         this.timeout(10000);
         return request.post('/api/v1/permissions')
            .send(permissions_manifest)
            .set('Accept', 'application/json')
            .set('Authorization', auth_token)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert(body["status"] === 'update', 'Permission status should be updated')
            })
            //.expect(200)
      });
   });
});


//-----Objects API-----

describe('Objects API', function () {
   describe('Creating Objects', function () {
      it('should create sub_obj_1', function () {
         this.timeout(10000);
         return request.post('/api/v1/objects')
            .send(sub_obj_1)
            .set('Accept', 'application/json')
            .set('Authorization', auth_token)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert(body["@id"] !== undefined, "Object ID Should be returned");
               sub_obj_1["@id"] = body["@id"]
            })
      }),
      it('should create sub_obj_2', function () {
         this.timeout(10000);
         return request.post('/api/v1/objects')
            .send(sub_obj_2)
            .set('Accept', 'application/json')
            .set('Authorization', auth_token)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert(body["@id"] !== undefined, "Object ID Should be returned");
               sub_obj_2["@id"] = body["@id"]
            })
      }),
         it('should create small_obj_1', function () {
            small_obj_1["@data"].sub_obj = sub_obj_2["@id"]
            this.timeout(10000);
            return request.post('/api/v1/objects')
               .send(small_obj_1)
               .set('Accept', 'application/json')
               .set('Authorization', auth_token)
               .expect('content-type', 'application/json; charset=utf-8')
               .expect(function (response) {
                  var body = JSON.parse(response.text);
                  assert(body["@id"] !== undefined, "Object ID Should be returned");
                  small_obj_1["@id"] = body["@id"]
               })
         })
         ,
         it('should create small_obj_2', function () {
            this.timeout(10000);
            return request.post('/api/v1/objects')
               .send(small_obj_2)
               .set('Accept', 'application/json')
               .set('Authorization', auth_token)
               .expect('content-type', 'application/json; charset=utf-8')
               .expect(function (response) {
                  var body = JSON.parse(response.text);
                  assert(body["@id"] !== undefined, "Object ID Should be returned");
                  small_obj_2["@id"] = body["@id"]
               })
         })
         ,
         it('should create large_obj', function () {
            this.timeout(10000);
            return request.post('/api/v1/objects')
               .send(large_obj)
               .set('Accept', 'application/json')
               .set('Authorization', auth_token)
               .expect('content-type', 'application/json; charset=utf-8')
               .expect(function (response) {
                  var body = JSON.parse(response.text);
                  assert(body["@id"] !== undefined, "Object ID Should be returned");
                  large_obj["@id"] = body["@id"]
               })
         })
   });
   describe('Reading Objects', function () {
      it('should Read large_obj Object', function () {
         this.timeout(10000);
         return request.get('/api/v1/objects/' + large_obj["@id"])
            .set('Authorization', auth_token)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert.deepEqual(body["@id"],         large_obj["@id"], 'Object id should be ' + large_obj["@id"]);
               assert.deepEqual(body["@openi_type"], large_obj["@openi_type"], 'Object type should be ' + large_obj["@openi_type"]);
               assert.deepEqual(body["@data"],       large_obj["@data"], 'Object @data not matching');
            });
      }),
      it('should Read small_obj_1 Object', function () {
         this.timeout(10000);
         return request.get('/api/v1/objects/' + small_obj_1["@id"])
            .set('Authorization', auth_token)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert.deepEqual(body["@id"],         small_obj_1["@id"], 'Object id should be ' + small_obj_1["@id"]);
               assert.deepEqual(body["@openi_type"], small_obj_1["@openi_type"], 'Object type should be ' + small_obj_1["@openi_type"]);
               assert.deepEqual(body["@data"],       small_obj_1["@data"], 'Object @data not matching');
            });
      }),
      it('should Read small_obj_2 Object', function () {
         this.timeout(10000);
         return request.get('/api/v1/objects/' + small_obj_2["@id"])
            .set('Authorization', auth_token)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert.deepEqual(body["@id"],         small_obj_2["@id"], 'Object id should be ' + small_obj_2["@id"]);
               assert.deepEqual(body["@openi_type"], small_obj_2["@openi_type"], 'Object type should be ' + small_obj_2["@openi_type"]);
               assert.deepEqual(body["@data"],       small_obj_2["@data"], 'Object @data not matching');
            });
      }),
      it('should Read small_obj_2 Object with resolve true', function () {
         this.timeout(10000);
         return request.get('/api/v1/objects/' + small_obj_1["@id"] + "?resolve=true")
            .set('Authorization', auth_token)
            .expect('content-type', 'application/json; charset=utf-8')
            .expect(function (response) {
               var body = JSON.parse(response.text);
               assert.deepEqual(body["@id"],         small_obj_1["@id"], 'Object id should be ' + small_obj_1["@id"]);
               assert.deepEqual(body["@openi_type"], small_obj_1["@openi_type"], 'Object type should be ' + small_obj_1["@openi_type"]);
               assert.deepEqual(body["@data"], {
                                    "name": "small obj 1",
                                    "sub_obj": {
                                      "fav_nums": [ 103, 4, 23 ],
                                      "name": "sub_obj_2"
                                    }
                                 }, 'Object @data not matching');
            });
      });
   });
});
