const dotenv = require('dotenv');
dotenv.config();
var request = require("request");

// SENDING MAIL
// var options = { method: 'POST',
//   url: 'https://api.sendgrid.com/v3/mail/send',
//   headers: 
//    { 'content-type': 'application/json',
//      authorization: `Bearer ${process.env.API_KEY}` },
//   body: 
//    { personalizations: 
//       [ { to: [ { email: 'salihouridwyn@gmail.com'} ],
//           dynamic_template_data: { verb: '', adjective: '', noun: '', currentDayofWeek: '' },
//           subject: 'Hello, World!' } ],
//      from: { email: 'noreply@johndoe.com', name: 'John Doe' },
//      reply_to: { email: 'noreply@johndoe.com', name: 'John Doe' },
//      template_id: 'd-0469eb4585644c3db61f1370740f1234' },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(response.statusCode);
// });

// CREATING CONTACT LIST
// var options = { method: 'POST',
//   url: 'https://api.sendgrid.com/v3/contactdb/lists',
//   headers: 
//    { 'content-type': 'application/json',
//      authorization: `Bearer ${process.env.API_KEY}` },
//   body: { name: 'My SECOND LIST' },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(response.statusCode,response.statusMessage);
// });

// GETTING LIST
// var request = require("request");

// var options = { method: 'GET',
//   url: 'https://api.sendgrid.com/v3/contactdb/lists',
//   headers: { authorization: `Bearer ${process.env.API_KEY}`},
//   body: '{}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// CREATING RECIPIENTS LIST
// var options = { method: 'POST',
//   url: 'https://api.sendgrid.com/v3/contactdb/recipients',
//   headers: 
//    { 'content-type': 'application/json',
//    authorization: `Bearer ${process.env.API_KEY}` },
//   body: 
//    [ { email: 'salihouridwyn@gmail.com',
//        first_name: 'RICH',
//        last_name: 'GREEN',
//        },
//      { email: 'rfusiondev@gmail.com',
//        first_name: 'RFUSE',
//        last_name: 'TRAY',
//        },
//        ],
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(response.statusCode,response.statusMessage);
// });

// RETRIEVING ALL RECIPIENTS
// var options = { method: 'GET',
//   url: 'https://api.sendgrid.com/v3/contactdb/recipients',
//   headers: { authorization: `Bearer ${process.env.API_KEY}` },
//   body: '{}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });


// ADDING ALL RECIPIENT TO CONTACT LIST 1
// var options = { method: 'POST',
//   url: 'https://api.sendgrid.com/v3/contactdb/lists/7996316/recipients',
//   headers: 
//    { 'content-type': 'application/json',
//      authorization: `Bearer ${process.env.API_KEY}` },
//   body: [ 'c2FsaWhvdXJpZHd5bkBnbWFpbC5jb20=',
//           'cmZ1c2lvbmRldkBnbWFpbC5jb20='
//         ],
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(response.statusCode,response.statusMessage);
// });


// SEARCH A CONTACT
// var options = { method: 'POST',
//   url: 'https://api.sendgrid.com/v3/contactdb/recipients/search',
//   headers: { authorization: `Bearer ${process.env.API_KEY}` },
//   body: '{"list_id":8004287,"conditions":[{"and_or":"","field":"email","value":"johnwick@gmail.com","operator":"eq"}]}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });


// SEARCH FOR CONTATCTS EITHER BY FIELDNAME
// var options = { method: 'GET',
//   url: 'https://api.sendgrid.com/v3/contactdb/recipients/search?email=johnwick@gmail.com',
//   headers: { authorization: `Bearer ${process.env.API_KEY}` },
//   body: '{}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// GET LIST THAT CONTACT BELONG TO 
// var options = { method: 'GET',
//   url: 'https://api.sendgrid.com/v3/contactdb/recipients/am9obndpY2tAZ21haWwuY29t/lists',
//   headers: { authorization: `Bearer ${process.env.API_KEY}` },
//   body: '{}' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// UPDATING A CONTACT
// var options = { method: 'PATCH',
//   url: `https://api.sendgrid.com/v3/contactdb/recipients?id=YmFpbHllcmNAb3V0bG9vay5jb20=`,
//   headers: 
//    { 'content-type': 'application/json',
//      authorization: `Bearer ${process.env.API_KEY}` },
//   body: 
//    [ { email: 'bailerc@mailer.com',
//        last_name: 'bailey',
//        first_name: 'john' } ],
//        json: true };
    
//   request(options, function (error, response, body) {
//          if (error) throw new Error(error);
//          console.log(body);
// });


// DELETING CONTACT

// var request = require("request");

// var options = { method: 'DELETE',
//   url: 'https://api.sendgrid.com/v3/contactdb/recipients/YnJhZGZvc3RlckBnbWFpbC5jb20=',
//   headers: { authorization: `Bearer ${process.env.API_KEY}`},
//   body: 'null' };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log( response.statusCode,response.statusMessage);
// });