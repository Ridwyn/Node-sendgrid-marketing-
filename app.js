const express = require('express')
const sendgrid = require('./sendgrid.js');
const bodyParser = require('body-parser');
const app = express()
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT ||3000


// RETRIEVING CONTACT
app.get('/recipients',(req,res)=>{
    sendgrid.fetch('https://api.sendgrid.com/v3/contactdb/recipients')
    .then(resolve=>{res.json(resolve.body)}) 
})
app.get('/recipient',(req,res)=>{
    sendgrid.fetch(`https://api.sendgrid.com/v3/contactdb/recipients/${req.headers.id}`)
    .then((resolve,reject)=>{ res.json(resolve.body)
        // console.log(req.headers.id)
    })     
})
// GET LIST RECIPIENT BELONG TO
app.get('recipient-belong-to',(req,res)=>{
    sendgrid.fetch(`https://api.sendgrid.com/v3/contactdb/recipients/${req.headers.id}/lists`)
    .then(resolve=>{ res.json(resolve)
        // console.log(req.query.id)
    }) 
})

// RETRIEVING CONTACT LIST
app.get('/lists',(req,res)=>{
    sendgrid.fetch('https://api.sendgrid.com/v3/contactdb/lists').then(resolve=>{ res.json(resolve.body)})
})
app.get('/list',(req,res)=>{
    sendgrid.fetch(`https://api.sendgrid.com/v3/contactdb/lists/${req.headers.id}`)
    .then(resolve=>{ res.json(resolve.body)
        console.log(req.query.id)
    }) 
})


// MAKING A LIST
 //Creating single contact list
app.post('/create-list', (req, res) => {   
    sendgrid.add('https://api.sendgrid.com/v3/contactdb/lists',{name:`${req.body.name}`})
    .then(resolve=>{res.send(resolve.statusMessage)})
})

// CREATING RECIPIENT
let contacts=[]
app.post('/create-recipient', (req, res) => {  
    if(Array.isArray(req.body)){
        req.body.forEach(contact => {
            contacts.push({email:contact.email,first_name:contact.first_name,last_name:contact.last_name})
        });
         sendgrid.add('https://api.sendgrid.com/v3/contactdb/recipients',contacts).then(resolve=>{res.send(resolve.statusMessage)})
 
    }else{
        contacts.push({email:req.body.email,first_name:req.body.first_name,last_name:req.body.last_name})
        sendgrid.add('https://api.sendgrid.com/v3/contactdb/recipients',contacts).then(resolve=>{res.send(resolve.statusMessage)})
    }   
})


// ADD RECIPIENTS TO CONTACT LIST BY ID
let contactsId=[]
app.post('/add-to-list/', (req, res) => { 
    if(Array.isArray(req.body)){
        req.body.forEach(contact => {
            contactsId.push(contact.id,)
        });
        sendgrid.add(`https://api.sendgrid.com/v3/contactdb/lists/${req.headers.id}/recipients`,contactsId).then(resolve=>{res.send(resolve.statusMessage)})
 
    }else{
        contactsId.push({email:req.body.email,first_name:req.body.first_name,last_name:req.body.last_name})
        sendgrid.add(`https://api.sendgrid.com/v3/contactdb/lists/${req.headers.id}/recipients`,contactsId).then(resolve=>{res.send(resolve.statusMessage)})
    }    
})

// UPDATING A CONTACT
let recipientUpdate= []
app.put('/update-recipient', (req, res) => { 
        recipientUpdate.push({email:req.body.email,first_name:req.body.first_name,last_name:req.body.last_name})
        sendgrid.update(`https://api.sendgrid.com/v3/contactdb/recipients?id=${req.headers.id}`,recipientUpdate).then(resolve=>{res.send(resolve.statusMessage)})
   
})




// DELETING A RECIPIENT
app.delete('/delete-recipient', (req, res) => {   
    sendgrid.deleting(`https://api.sendgrid.com/v3/contactdb/recipients/${req.headers.id}`)
    .then(resolve=>{res.json(respone.statusCode,resolve.statusMessage)})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))