var request = require("request");
const dotenv = require('dotenv');
dotenv.config();

let body=
[ { email: 'johnwick@gmail.com',
    last_name: 'bond',
    first_name: 'john' } ]

let up= 'https://api.sendgrid.com/v3/contactdb/recipients/YnJhZGZvc3RlckBnbWFpbC5jb20=';

function deleting(url){ 
    var options = { method: 'DELETE',
    url: url,
    headers: { authorization: `Bearer ${process.env.API_KEY}`},
    body: 'null' };
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
//  deleting(up).then(resolve=>{console.log(resolve)})

module.exports={
    fetch:function getList(url){ 
        var options = { method: 'GET',
        url:url,
        headers: { authorization: `Bearer ${process.env.API_KEY}` },
        body: '{}' };
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
    add:function addlist(url,body){
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
        body: 'null' };
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