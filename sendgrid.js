var request = require("request");
const dotenv = require('dotenv');
dotenv.config();


module.exports={
    fetch:function getList(url){ 
        var options = { method: 'GET',
        url:url,
        headers: { authorization: `Bearer ${process.env.API_KEY}` },
        body: '{}' ,
    json:true};
        return new Promise(function(resolve, reject) {
         request(options, function (error, response, body) {
            if (error) {
                reject(err);
            } else {
                resolve(response);
            }       
          });
        })
    },
    add:function addlist(url,body,qs){
        var options = { method: 'POST',
         url: url,
        headers: 
        { 'content-type': 'application/json',
            authorization: `Bearer ${process.env.API_KEY}` },
        body: body,
        json: true };
        return new Promise(function(resolve, reject) { 
            request(options, function (error, response, body) {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }       
            });
        })
    },
    update:function update(url,body){ 
        var options = { method: 'PATCH',
          url: url,
          headers: 
           { 'content-type': 'application/json',
             authorization: `Bearer ${process.env.API_KEY}` },
            body: body,
            json: true };
        return new Promise(function(resolve, reject) {
         request(options, function (error, response, body) {
            if (error) {
                reject(err);
            } else {
                resolve(response);
            }       
          });
        })
    },
    deleting:function deleting(url){ 
        var options = { method: 'DELETE',
        url: url,
        headers: { authorization: `Bearer ${process.env.API_KEY}`},
        body: 'null' ,
    json:true};
        return new Promise(function(resolve, reject) {
         request(options, function (error, response, body) {
            if (error) {
                reject(err);
            } else {
                resolve(response);
            }       
          });
        })
    }
}